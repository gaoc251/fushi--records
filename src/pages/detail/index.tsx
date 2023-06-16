import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

import Taro, {getCurrentInstance} from '@tarojs/taro'
import { getDetail } from './lib/getDetail'
import { clickCollect } from './lib/clickCollectBtn'
import { isLogin, handleLogin } from '@/utils/util'
import favIcon from '@/asset/imgs/favorite-default.png'
import favIconSelected from '@/asset/imgs/favorite-choose.png'

import smallCollectIcon from '@/asset/imgs/icon/collect.png'
import smallTimeIcon from '@/asset/imgs/icon/time.png'

import Comments from '@/components/Detail/Comments'
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
    let _steps = (detailInfo.steps && JSON.parse(detailInfo.steps)) || []

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

          <View className='detail__baseInfo'>
            <View className='detail__baseInfo-item'>
              <Image className='detail__baseInfo-item-icon' src={smallTimeIcon} />
              <View className='detail__baseInfo-item-text'>时间：   {detailInfo.time}</View>
            </View>
            <View className='detail__baseInfo-item'>
              <Image className='detail__baseInfo-item-icon' src={smallCollectIcon} />
              <View className='detail__baseInfo-item-text'>收藏人数：   {detailInfo.favoriteNum}</View>
            </View>
          </View>
          <View className='detail__info'>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>食材：</View>
              <View className='detail__info-item-text'>{detailInfo.ingredients}</View>
            </View>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>调料：</View>
              <View className='detail__info-item-text'>{detailInfo.seasoning}</View>
            </View>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>烹饪方法：</View>
              <View className='detail__info-item-text'>{cookingText[detailInfo.cooking]}</View>
            </View>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>月龄：</View>
              <View className='detail__info-item-text'>{(detailInfo.month == 12 || detailInfo.month == 24 || detailInfo.month == 36)? detailInfo.month/12 + '周岁以上':'月龄'}</View>
            </View>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>难易程度：</View>
              <View className='detail__info-item-text'>{detailInfo.hard} 级</View>
            </View>
            <View className='detail__info-item'>
              <View className='detail__info-item-title'>注意：</View>
              <View className='detail__info-item-text'>{detailInfo.tip}</View>
            </View>
          </View>

          <View className='detail__steps'>
            <View className='detail__subtitle'>步骤：</View>
            {_steps && _steps.map((item: any)=>{
              return <View className=''>{item}</View>
            })}
          </View>

          <Image src={detailInfo.collectState?favIconSelected: favIcon} className='detail__favicon' onClick={this.handelCollect.bind(this)}/>

          {/* <View className='detail__subtitle' style={{marginLeft: '22px'}}>评价：</View>
          <Comments /> */}
        </View>
    )
  }
}
