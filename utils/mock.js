const locationOptions = [
  {
    id: 'loc-gov',
    name: '上海市杨浦区人民政府',
    detail: '上海市杨浦区榆林路 707 号',
    latitude: 31.26336,
    longitude: 121.5299,
  },
  {
    id: 'loc-pingliang',
    name: '平凉路',
    detail: '上海市杨浦区地铁 18 号线',
    latitude: 31.26184,
    longitude: 121.53129,
  },
  {
    id: 'loc-wanxiang',
    name: '万象商场',
    detail: '鹏鹏铁锅炖大鹅',
    latitude: 31.26073,
    longitude: 121.52689,
  },
  {
    id: 'loc-qianhai',
    name: '前海公馆',
    detail: '上海市杨浦区滨江生活圈',
    latitude: 31.25768,
    longitude: 121.53384,
  },
  {
    id: 'loc-tencent',
    name: '腾讯大厦',
    detail: '上海市杨浦区地铁旁办公区',
    latitude: 31.26225,
    longitude: 121.52368,
  },
];

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createInitialMeetup() {
  return {
    id: 'meetup-current',
    title: '我们哪里见',
    organizer: {
      id: 'organizer',
      name: 'yyh',
      avatarText: 'YY',
      accent: '#f5a524',
      location: deepClone(locationOptions[0]),
    },
    participants: [
      {
        id: 'participant-1',
        name: '阿哲',
        avatarText: 'AZ',
        accent: '#4c6ef5',
        location: deepClone(locationOptions[1]),
      },
    ],
    meetupPoint: {
      name: '万象商场',
      detail: '鹏鹏铁锅炖大鹅',
      latitude: 31.26073,
      longitude: 121.52689,
      summary: '当前建议所有人向万象商场集合，路程更均衡。',
    },
  };
}

function createHistoryMeetups() {
  return [
    {
      id: 'history-20260415',
      dateLabel: '2026.04.15',
      timeLabel: '16:06',
      statusLabel: '已结束',
      title: '周中碰面',
      meetupPoint: {
        name: '万象商场',
        detail: '鹏鹏铁锅炖大鹅',
      },
      participants: [
        {
          name: 'yyh',
          avatarText: 'YY',
          accent: '#f5a524',
        },
      ],
      summary: '我在 16:06 发起的碰面',
    },
    {
      id: 'history-20260411',
      dateLabel: '2026.04.11',
      timeLabel: '23:07',
      statusLabel: '已结束',
      title: '周末聚餐',
      meetupPoint: {
        name: '幸福里西区',
        detail: '附近步行可达',
      },
      participants: [
        {
          name: 'yyh',
          avatarText: 'YY',
          accent: '#f5a524',
        },
        {
          name: '阿哲',
          avatarText: 'AZ',
          accent: '#4c6ef5',
        },
      ],
      summary: '我在 23:07 发起的碰面',
    },
  ];
}

module.exports = {
  createHistoryMeetups,
  createInitialMeetup,
  deepClone,
  locationOptions,
};
