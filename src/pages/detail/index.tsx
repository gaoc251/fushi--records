import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

import Taro, {getCurrentInstance} from '@tarojs/taro'
import { getDetail } from './lib/getDetail'
import { clickCollect } from './lib/clickCollectBtn'
import { isLogin, handleLogin } from '@/utils/util'
import favIcon from '@/asset/imgs/favorite-default.png'
import favIconSelected from '@/asset/imgs/favorite-choose.png'

const cookingText = {
  0: '蒸',
  1: '炒',
  2: '煎',
  3: '搅拌',
  4: '煮',
  5: '烘焙',
  6: '炖'
}
export default class Detail extends Component  {
  $instance = getCurrentInstance()

  state = {
    options: {}, // 路由参数
    id: 0, // 菜谱ID,
    detailInfo: {}, // 菜谱详情
    openId: Taro.getStorageSync('openId')
  }
  componentWillMount () {
    let self = this; 
    // 获取路由参数
    const options = this.$instance.router.params
    self.setState({
      id: options.id,
      options
    })
    getDetail(options.id, self.state.openId, (data)=>{
      self.setState({
        detailInfo: data
      })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 点击收藏
  handelCollect () {
    console.log("uuu", Taro.getStorageSync('openId'), isLogin())
    let self = this
    const {detailInfo, openId} = self.state
    !isLogin() && handleLogin()
    isLogin() && clickCollect(detailInfo, openId, (res)=>{
      let  _detailInfo = {...detailInfo, ...{collectState: res.state}}
      self.setState ({
        detailInfo: _detailInfo
      })
    })
  }

  render () {
    const { detailInfo} = this.state
    let _imgList = (detailInfo.imgList && JSON.parse(detailInfo.imgList)) || []

    return (
        <View className='detail'>
          <View className='detail__header'>
            <Swiper
              className='detail__header-swiper'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              >
                {_imgList && _imgList.map((item:string) => {
                  return <SwiperItem className='detail__header-swiperitem'>
                    <Image src={item}  className="detail__header-swiperitem-img" mode='scaleToFill'/>
                  </SwiperItem>
                })}
            </Swiper>
          </View>

          <View className='detail__title'>{detailInfo.recordTitle}</View>

          <View className='detail__info'>
            <View>食材：{detailInfo.ingredients}</View>
            <View>调料：{detailInfo.seasoning}</View>
            <View>烹饪方法{cookingText[detailInfo.cooking]}</View>
            <View>月龄：{detailInfo.month}</View>
            <View>难易程度：{detailInfo.hard} 级</View>
            <View>注意：{detailInfo.tip}</View>
          </View>

          <View className='detail__steps'>
            <View className='detail__steps-title'>步骤：</View>
            {detailInfo.steps && detailInfo.steps.split(';;').map((item: any)=>{
              return <View className=''>{item}</View>
            })}
          </View>

          <Image src={detailInfo.collectState?favIconSelected: favIcon} className='detail__favicon' onClick={this.handelCollect.bind(this)}/>
        </View>
    )
  }
}
