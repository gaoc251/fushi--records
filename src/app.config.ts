export default {
  pages: [
    'pages/index/index',
    'pages/recipes/index',
    'pages/favorites/index',
    'pages/user/index',
    'pages/detail/index',
    'pages/uploadFushi/index',
    'pages/cateSub/index',
    'pages/search/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: 'f8b155',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: "./asset/imgs/icon/home.png",
      selectedIconPath: "./asset/imgs/icon/home-select.png",
    }, {
      pagePath: 'pages/recipes/index',
      text: '分类',
      iconPath: "./asset/imgs/icon/cate.png",
      selectedIconPath: "./asset/imgs/icon/cate-select.png",
    }, {
      pagePath: 'pages/favorites/index',
      text: '收藏',
      iconPath: "./asset/imgs/icon/favorite.png",
      selectedIconPath: "./asset/imgs/icon/favorite-select.png",
    },
    {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "./asset/imgs/icon/user.png",
      selectedIconPath: "./asset/imgs/icon/user-select.png",
    }
    ]
  },
}
