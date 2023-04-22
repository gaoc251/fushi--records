// 公共方法
import Taro from '@tarojs/taro'

/**
* 出发吊起授权登录
*/
function handleLogin (cb) {
   Taro.getSetting({
       success (res) {
           const { authSetting } = res
           console.log(res.authSetting)
           if (authSetting['scope.userInfo']) {
               getUserProfile(cb)
           } else {
               Taro.authorize({
                   scope: 'scope.userInfo',
                   success () {
                       console.log("授权成功")
                       getUserProfile(cb)
                   }
               })
           }
       }
   })
}
function getUserProfile (cb) {
   Taro.getUserProfile({
       desc: '请先授权登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
       success: (res) => {
           Taro.setStorage({
               key: "userInfo",
               data: res.userInfo
           })
           
           cb(res.userInfo)
       }
   })
}
export {
    handleLogin,
}