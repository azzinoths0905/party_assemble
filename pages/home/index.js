/* global Page, getApp, wx */
const app = getApp();

Page({
  data: {
    statusBarHeight: 20,
    meetup: null,
    mapCenter: {
      latitude: 31.26336,
      longitude: 121.5299,
    },
  },

  onShow() {
    const meetup = app.getCurrentMeetup();
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      meetup,
      mapCenter: {
        latitude: meetup.organizer.location.latitude,
        longitude: meetup.organizer.location.longitude,
      },
    });
  },

  openHistory() {
    wx.navigateTo({
      url: '/pages/history/index',
    });
  },

  openInvite() {
    wx.navigateTo({
      url: '/pages/invite/index',
    });
  },

  pickOrganizerLocation() {
    wx.navigateTo({
      url: `/pages/address-picker/index?target=organizer&selectedId=${this.data.meetup.organizer.location.id}`,
    });
  },
});
