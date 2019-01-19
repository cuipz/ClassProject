// pages/mine/mine.js
var date = '2019-01-06';
var time = '15:30-17:00';
var addr = '3号楼';
var room = '3101';
var permissonState = '已通过';
Page({
  data: {

  },
  bindWant: function () {
    wx.navigateTo({
      url: '../mian/mian'
    })
  },
  onLoad: function (options) {
    var that = this
    /*wx.request({
      url: 'http://154.8.223.24/api/class/getInfo',
      data: {
        'user': app.globalData.userInfo,
      },
      success: res => {
        var data = res.data;
        that.setData({
          data: data
        })
      }
    })*/
    this.setData({
      date: date,
      time: time,
      addr: addr,
      room: room,
      permissonState: permissonState,
    })
  },
})