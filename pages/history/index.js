/* global Page, getApp, wx */
const app = getApp();

Page({
  data: {
    statusBarHeight: 20,
    userProfile: null,
    historyMeetups: [],
  },

  onShow() {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      userProfile: app.globalData.userProfile,
      historyMeetups: app.getHistoryMeetups(),
    });
  },

  goBack() {
    wx.navigateBack();
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/home/index',
    });
  },

  showMeetupDetail(event) {
    const { title, point } = event.currentTarget.dataset;
    wx.showToast({
      title: `${title} · ${point}`,
      icon: 'none',
    });
  },
});
