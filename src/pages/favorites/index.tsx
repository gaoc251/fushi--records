import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import FavList from '@/components/Favorites/FavList'
import { getFavList } from './lib/getFavList'
import { clickCollect } from '../detail/lib/clickCollectBtn'
import noDataIcon from '@/asset/imgs/icon/no_data.png'

export default class Favorites extends Component  {

    state={
        favList: [], // 收藏列表
        openId: Taro.getStorageSync('openId')
    }

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
                {favList.length == 0 && <View className='no-data'>
                    <Image src={noDataIcon} className="no-data-icon"/>
                    <Text>您还没有收藏，快去收藏吧</Text>
                </View>}
            </View>
        )
    }
}
