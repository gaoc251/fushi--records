// 公共方法
import Taro from '@tarojs/taro'
import { API_getOpenId } from '@/data/api'
/**
* 出发吊起授权登录
*/
function handleLogin (cb?) {
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
function getUserProfile (cb?) {
    Taro.getUserProfile({
        desc: '请先授权登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
            Taro.setStorage({
                key: "userInfo",
                data: res.userInfo
            })
            cb && cb(res.userInfo)
        }
    })
}

// 获取openID
function getOpenId () {
    Taro.login({
        success: loginres => {
            if (loginres.code) {
                Taro.getUserInfo({
                    withCredentials: true,
                    success: user => {
                        Taro.request({
                            url: API_getOpenId, //仅为示例，并非真实的接口地址
                            method: "GET",
                            data: {
                                code: loginres.code,
                                encryptedData: user.encryptedData,
                                iv: user.iv
                            },
                            success: function (res) {
                                let openId = res.data.data.openId

                                Taro.setStorage({
                                    key: "openId",
                                    data: openId
                                })
                            }
                        })              
    
                    }
                })
            }
  
        }
    })
}

// 判断登录态
function isLogin () {
    let userInfo = Taro.getStorageSync('userInfo')
    return Number(Object.keys(userInfo).length)
}
export {
    handleLogin,
    isLogin,
    getOpenId
}