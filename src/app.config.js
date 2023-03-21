export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/personal/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/taozi.png',
        selectedIconPath: 'assets/images/tabbar/tizi.png'
      },
      {
        pagePath: 'pages/personal/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/yezi.png',
        selectedIconPath: 'assets/images/tabbar/shanzhu.png'
      }
    ],
    position: 'bottom'
  }
})
