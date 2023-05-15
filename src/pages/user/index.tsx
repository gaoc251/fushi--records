import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import Profile from '@/components/User/Profile'
import Menu from '@/components/User/Menu'


export default class User extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='user'>
            {/* 用户信息 */}
            <Profile/>
            {/* 目录 */}
            {/* <Menu/> */}
            {/* 上传接口 */}
            {/* <View className='jumpUpload'>上传</View> */}
        </View>
    )
  }
}
