import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import classNames from 'classnames'
import './index.scss'

import {handleLogin} from "@/utils/util"

import defaultAvatar from '../../../asset/imgs/del/Avatar.png'

interface stateType {
    userInfo: {
        avatarUrl: string
        nickName: string
    },
    defaultAvatar: string
}

export default class Profile extends Component<any, stateType> {

    constructor (props) {
        super(props)
        this.state = { // 用户信息
          userInfo: {
            avatarUrl: '',
            nickName: ''
          }, 
          defaultAvatar: defaultAvatar, // 默认头像
        }
    }

    componentWillMount () {
        let _userInfo = Taro.getStorageSync('userInfo')
        this.setState({
            userInfo: _userInfo
        })
    }

    // 触发登录事件
    handleLogin () {
        let self = this
        handleLogin ((userInfo) => {
            self.setState ({
                userInfo
            })
        })
    }

    // 退出
    handleLoginOut () {
        Taro.removeStorageSync('userInfo'); //清除本地缓存
        this.setState({
            userInfo: {
                avatarUrl: '',
                nickName: ''
            }
        })
        Taro.showToast({
            title: "退出登录成功！"
        })
    }

    render () {
        const { defaultAvatar, userInfo } = this.state

        return (
            <View className='user-profile'>
                <View className='user-profile__wrap'>
                    {/* 头像 */}
                    <View className='user-profile__avatar'>
                        <Image
                        className='user-profile__avatar-img'
                        src={userInfo.avatarUrl || defaultAvatar}
                        lazyLoad
                        />
                    </View>

                    {/* 登录 */}
                    <View className='user-profile__info'>
                        <Text className='user-profile__info-name' onClick={this.handleLogin.bind(this)}>
                            { userInfo.nickName || '未登录'}
                        </Text>
                        {Object.keys(userInfo).length?<View className='user-profile__info-tip' onClick={this.handleLoginOut.bind(this)}>退出登录</View>:<View className='user-profile__info-tip' onClick={this.handleLogin.bind(this)}>点击登录账号</View>}
                    </View>

                </View>
            </View>
        )
    }
}
