Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[
      {
        id:0,
        name:"首页"
      },
      {
        id:1,
        name:"内容"
      },
      {
        id:2,
        name:"剧场"
      },
      {
        id:3,
        name:"番剧"
      },
      {
        id:4,
        name:"国创"
      },
      {
        id:5,
        name:"动漫"
      }
    ],
    // 轮播图数据
  swiperList:[
    {
      index:0,
      imgSrc:"../../uploads/swiper1.webp"
    },
    {
      index:1,
      imgSrc:"../../uploads/swiper2.webp"
    },
    {
      index:2,
      imgSrc:"../../uploads/swiper3.jpg"
    }
  ],
  //video数据
  videoList:[
    {
      imgSrc:"../../uploads/video01.png",
      play:"30万",
      pinlun:"8446",
      title:"这是一个有味道的视频"
    },
    {
      imgSrc:"../../uploads/video02.png",
      play:"40万",
      pinlun:"5546",
      title:"这是一个有味道的视频"


    },
    {
      imgSrc:"../../uploads/video03.png",
      pinlun:"9246",
      play:"33万",
      title:"这是一个有味道的视频"

    },
    {
      imgSrc:"../../uploads/video04.png",
      pinlun:"3446",
      play:"60万",
      title:"这是一个有味道的视频"
    }
  ],

  },
  
  activeNav(e){
    this.setData({      
      currentIndexNav:e.target.dataset.index
    })
  },
  // getNavList(){
  //   // 利用小程序内置发送请求的方法
  //   wx.request({
  //     url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
  //     success(res){
  //       console.log(res);
        
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
  },

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
  onUnload: function () {
    
  },

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
    
  }
})