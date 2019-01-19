// pages/mian/mian.js
var cdate = '2019-01-01';
var cdateStart;
var cdateEnd;
var ctime = '8:30-10:00';
var caddr = '3号楼';
var time = ['8:30-10:00', '10:00-11:30', '14:00-15:30', '15:30-17:00'];
var addr = ['研发楼', '3号楼'];
var roomInformation;
var id = '3101';
Page({
  data: {
    time: ['8:30-10:00', '10:00-11:30', '14:00-15:30', '15:30-17:00'],
    objectTime: [
      {
        id: 0,
        name: '8:30-10:00'
      },
      {
        id: 1,
        name: '10:00-11:30'
      },
      {
        id: 2,
        name: '14:00-15:30'
      },
      {
        id: 3,
        name: '15:30-17:00'
      }
    ],
    timeIndex: 0,
    //addr: [['研发楼', '3号楼'], ['1楼', '2楼', '3楼'], ['1101', '1102']],
    addr: ['研发楼','3号楼'],
    objectAddr: [
      {
        id: 0,
        name: '研发楼'
      },
      {
        id: 1,
        name: '3号楼'
      }
    ],
    addrIndex: 1,
    date: '2019-01-01',
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    cdate = e.detail.value,
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    ctime = time[e.detail.value],
    this.setData({
      timeIndex: e.detail.value
    })
  },
  bindAddrChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    caddr = addr[e.detail.value],
    this.setData({
      addrIndex: e.detail.value
    })
  },
  gotoresult: function (e) {
    var ep = e.target.id;
    wx.navigateTo({
      url: '../order/order?date='+cdate+'&time='+ctime+'&addr='+caddr+'&id='+id
    })
  },
  bindMine: function(){
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  bindSearch: function (){
    var that = this;
    var data = {
      'date': cdate,
      'time': ctime,
      'addr': caddr,
    }
   /* wx.request({
      url: 'http://154.8.223.24/api/class/read',
      data: data,
      success: res => {
        roomInformation = res.data;
        that.setData({
          room: res.data,
        })
      }
    })*/
    that.setData({
      id: id,
      state: '空',
    })
  },
})