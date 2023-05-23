import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import FavList from '@/components/Favorites/FavList'
import { getFavList } from './lib/getFavList'
import { clickCollect } from '../detail/lib/clickCollectBtn'

export default class Favorites extends Component  {

    state={
        favList: [], // 收藏列表
        openId: Taro.getStorageSync('openId')
    }
    // async componentWillMount () {
    //     debugger
    //     let self = this
    //     await getFavList(this.state.openId,(list)=>{
    //         self.setState({
    //             favList: list
    //         })
    //     })
    // }

    componentDidMount () { }

    componentWillUnmount () { }

    async componentDidShow () {
        let self = this
        await getFavList(this.state.openId,(list)=>{
            self.setState({
                favList: list
            })
        })
    }

    componentDidHide () { }

    changeCollectState(item) {
        let self = this
        clickCollect(item, Taro.getStorageSync('openId'), ()=>{
            getFavList(this.state.openId,(list)=>{
                self.setState({
                    favList: list
                })
            })
        })
      }

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
                <FavList list={favList} changCollect={this.changeCollectState.bind(this)}/>
            </View>
        )
    }
}
