Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameValue: [0,0,0,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 开奖
  Lottery: function () {
    // 生成5个随机数
    for(let i = 0; i < 5; i++){
      // 生成小于30的随机数
      let newNum = Math.floor(Math.random()*31)
      let num = 'gameValue[' + i + ']'
      this.setData({
        [num]: newNum
      })
    }
  }
})