/* global Page, getApp, wx */
const app = getApp();

Page({
  data: {
    statusBarHeight: 20,
    meetup: null,
    mapCenter: {
      latitude: 31.26073,
      longitude: 121.52689,
    },
  },

  onShow() {
    const meetup = app.getCurrentMeetup();
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      meetup,
      mapCenter: {
        latitude: meetup.meetupPoint.latitude,
        longitude: meetup.meetupPoint.longitude,
      },
    });
  },

  goBack() {
    wx.navigateBack();
  },

  addParticipant() {
    wx.navigateTo({
      url: '/pages/address-picker/index?target=participant',
    });
  },

  showMeetupPoint() {
    const { meetupPoint } = this.data.meetup;
    wx.showModal({
      title: meetupPoint.name,
      content: meetupPoint.summary,
      showCancel: false,
      confirmText: '知道了',
    });
  },

  finishMeetup() {
    app.finishCurrentMeetup();
    wx.redirectTo({
      url: '/pages/history/index',
    });
  },
});
