import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import FavList from '@/components/Favorites/FavList'
import { getFavList } from './lib/getFavList'

export default class Favorites extends Component  {

    state={
        favList: [], // 收藏列表
        openId: Taro.getStorageSync('openId')
    }
    async componentWillMount () {
        let self = this
        await getFavList(this.state.openId,(list)=>{
            self.setState({
                favList: list
            })
        })
    }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        const { favList } = this.state
        return (
            <View className='favorites'>
                <View className='favorites__tab'>
                    {/* <View className='favorites__tab-item active'>All</View> */}
                    <View className='favorites__tab-item'>餐谱</View>
                    {/* <View className='favorites__tab-item'>知识</View> */}
                </View>

                {/* 收藏列表 */}
                <FavList list={favList}/>
            </View>
        )
    }
}
