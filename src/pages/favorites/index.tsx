import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import FavList from '@/components/Favorites/FavList'

import imgIcon from '@/asset/imgs/del/masala-papad 1.png'

const data = {
    list: [{
        id: 1,
        title: "面条",
        desc: "无",
        favoriteNum: 9,
        imgList: [imgIcon],
        time: '24min'
    },{
        id: 2,
        title: "白水蛋",
        desc: "无",
        favoriteNum: 10,
        imgList: [imgIcon],
        time: '1h'
    }]
}

export default class Favorites extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='favorites'>
            <View className='favorites__tab'>
                <View className='favorites__tab-item active'>All</View>
                <View className='favorites__tab-item'>餐谱</View>
                <View className='favorites__tab-item'>知识</View>
            </View>

            {/* 收藏列表 */}
            <FavList list={data.list}/>
        </View>
    )
  }
}
