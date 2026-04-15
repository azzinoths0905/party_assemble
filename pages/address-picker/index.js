/* global Page, getApp, wx */
const app = getApp();
const { locationOptions } = require('../../utils/mock');

const NAVIGATE_BACK_DELAY = 300;

Page({
  data: {
    statusBarHeight: 20,
    keyword: '',
    target: 'organizer',
    selectedId: locationOptions[0].id,
    mapCenter: {
      latitude: locationOptions[0].latitude,
      longitude: locationOptions[0].longitude,
    },
    results: locationOptions,
  },

  onLoad(query) {
    const target = query.target === 'participant' ? 'participant' : 'organizer';
    const selectedId = query.selectedId || locationOptions[0].id;
    const selectedLocation = this.getLocationById(selectedId) || locationOptions[0];

    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      target,
      selectedId: selectedLocation.id,
      mapCenter: {
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      },
      results: locationOptions,
    });
  },

  getLocationById(id) {
    return locationOptions.find((location) => location.id === id);
  },

  handleKeywordChange(event) {
    const keyword = event.detail.value.trim();
    const normalized = keyword.toLowerCase();
    const results = locationOptions.filter((location) => (
      !normalized
      || location.name.toLowerCase().includes(normalized)
      || location.detail.toLowerCase().includes(normalized)
    ));
    const selectedLocation = results[0];

    this.setData({
      keyword,
      results,
      selectedId: selectedLocation ? selectedLocation.id : '',
      mapCenter: {
        latitude: selectedLocation ? selectedLocation.latitude : this.data.mapCenter.latitude,
        longitude: selectedLocation ? selectedLocation.longitude : this.data.mapCenter.longitude,
      },
    });
  },

  selectLocation(event) {
    const { locationId } = event.currentTarget.dataset;
    const selectedLocation = this.getLocationById(locationId);

    if (!selectedLocation) {
      return;
    }

    this.setData({
      selectedId: selectedLocation.id,
      mapCenter: {
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      },
    });
  },

  cancel() {
    wx.navigateBack();
  },

  confirmSelection() {
    const selectedLocation = this.getLocationById(this.data.selectedId);
    const isParticipantTarget = this.data.target === 'participant';

    if (!selectedLocation) {
      wx.showToast({
        title: '请先选择一个地点',
        icon: 'none',
      });
      return;
    }

    if (isParticipantTarget) {
      app.addManualParticipant(selectedLocation);
      wx.showToast({
        title: '已添加朋友位置',
        icon: 'success',
      });
    } else {
      app.updateOrganizerLocation(selectedLocation);
      wx.showToast({
        title: '已更新我的位置',
        icon: 'success',
      });
    }

    setTimeout(() => {
      wx.navigateBack();
    }, NAVIGATE_BACK_DELAY);
  },
});
