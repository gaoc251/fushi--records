export default {
  pages: [
    'pages/index/index',
    'pages/recipes/index',
    'pages/favorites/index',
    'pages/user/index',
    'pages/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: '#22BB9B',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: "./asset/imgs/home.png",
      selectedIconPath: "./asset/imgs/home-select.png",
    }, {
      pagePath: 'pages/recipes/index',
      text: '配方',
      iconPath: "./asset/imgs/recipes.png",
      selectedIconPath: "./asset/imgs/recipes-select.png",
    }, {
      pagePath: 'pages/favorites/index',
      text: '收藏',
      iconPath: "./asset/imgs/favorite.png",
      selectedIconPath: "./asset/imgs/favorite-select.png",
    },
    {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "./asset/imgs/user.png",
      selectedIconPath: "./asset/imgs/user-select.png",
    }
    ]
  },
}
