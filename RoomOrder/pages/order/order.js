// pages/order/order.js
var userName;
var userId;
var userPhone;
var date;
var time;
var room;
var addr;
Page({
  data: {

  },
  bindMine: function () {
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  bindWant: function () {
    wx.navigateTo({
      url: '../mian/mian'
    })
  },
  nameInput: function(e){
    userName = e.detail.value
  },
  idInput: function (e) {
    userId = e.detail.value
  },
  phoneInput: function (e) {
    userPhone = e.detail.value
  },
  bindSubmit: function(){
    if(userName){
      if(userId){
        if(userPhone){
         /* wx.request({
            url: 'http://154.8.223.24/api/class/write',
            data: {
              'date': date,
              'time': time,
              'addr': addr,
              'id': room,
              'user': userName,
              'usernumber': userId,
              'userphone': userPhone
            },
            success: res => {
              wx.showToast({
                title: '申请成功',
                duration: 1000,
                mask: true
              })
              wx.navigateTo({
                url: '../mine/mine'
              })
            }
          })*/

          wx.showToast({
            title: '申请成功',
            icon: 'success',
            duration: 2000,
            mask: true
          })
          wx.navigateTo({
            url: '../mine/mine'
          })
        }else{
          wx.showToast({
            title: '联系方式不能空',
            icon: 'loading',
            duration: 1000,
            mask: true
          })
        }
      }
      else{
        wx.showToast({
          title: '学号不能为空',
          icon: 'loading',
          duration: 1000,
          mask: true
        })
      }
    }else{
      wx.showToast({
        title: '姓名不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    }
  },
  onLoad: function (options) {
    var that = this
    userName = '';
    userId = '';
    userPhone = '';
    date = options.date
    time = options.time
    addr = options.addr
    room = options.id
    that.setData({
      date: options.date,
      time: options.time,
      addr: options.addr,
      room: options.id,
    })
  },
})