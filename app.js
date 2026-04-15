/* global App, wx */
const {
  createHistoryMeetups,
  createInitialMeetup,
  deepClone,
} = require('./utils/mock');

const DEFAULT_STATUS_BAR_HEIGHT = 20;
const PAD_LENGTH = 2;

function pad(value) {
  return `${value}`.padStart(PAD_LENGTH, '0');
}

function formatDateLabel(date) {
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
}

function formatTimeLabel(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

App({
  globalData: {
    statusBarHeight: DEFAULT_STATUS_BAR_HEIGHT,
    manualParticipantCount: 1,
    currentMeetup: createInitialMeetup(),
    historyMeetups: createHistoryMeetups(),
    userProfile: {
      name: 'yyh',
      avatarText: 'YY',
      accent: '#f5a524',
    },
  },

  onLaunch() {
    try {
      const windowInfo = typeof wx.getWindowInfo === 'function'
        ? wx.getWindowInfo()
        : wx.getSystemInfoSync();

      this.globalData.statusBarHeight = windowInfo.statusBarHeight || DEFAULT_STATUS_BAR_HEIGHT;
    } catch {
      this.globalData.statusBarHeight = DEFAULT_STATUS_BAR_HEIGHT;
    }
  },

  getCurrentMeetup() {
    return deepClone(this.globalData.currentMeetup);
  },

  getHistoryMeetups() {
    return deepClone(this.globalData.historyMeetups);
  },

  updateOrganizerLocation(location) {
    this.globalData.currentMeetup.organizer.location = deepClone(location);
    return this.getCurrentMeetup();
  },

  addManualParticipant(location) {
    const participantIndex = this.globalData.manualParticipantCount;
    const palette = ['#4c6ef5', '#ff7a59', '#7c4dff', '#1f9d8b'];
    const participant = {
      id: `manual-${Date.now()}`,
      name: `朋友 ${participantIndex}`,
      avatarText: `P${participantIndex}`,
      accent: palette[(participantIndex - 1) % palette.length],
      location: deepClone(location),
    };

    this.globalData.manualParticipantCount += 1;
    this.globalData.currentMeetup.participants = [
      ...this.globalData.currentMeetup.participants,
      participant,
    ];

    return deepClone(participant);
  },

  finishCurrentMeetup() {
    const finishedAt = new Date();
    const meetup = this.getCurrentMeetup();
    const historyItem = {
      id: `history-${finishedAt.getTime()}`,
      dateLabel: formatDateLabel(finishedAt),
      timeLabel: formatTimeLabel(finishedAt),
      statusLabel: '已结束',
      title: meetup.title,
      meetupPoint: deepClone(meetup.meetupPoint),
      participants: [
        {
          name: meetup.organizer.name,
          avatarText: meetup.organizer.avatarText,
          accent: meetup.organizer.accent,
        },
        ...meetup.participants.map((participant) => ({
          name: participant.name,
          avatarText: participant.avatarText,
          accent: participant.accent,
        })),
      ],
      summary: `${meetup.organizer.name} 在 ${formatTimeLabel(finishedAt)} 发起的碰面`,
    };

    this.globalData.historyMeetups = [
      historyItem,
      ...this.globalData.historyMeetups,
    ];
    this.globalData.manualParticipantCount = 1;
    this.globalData.currentMeetup = createInitialMeetup();

    return deepClone(historyItem);
  },
});
