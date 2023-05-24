import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

import { FLITER_NAV } from '@/data/constants'

export default class IconList extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handelJumpCateSub (item) {
    Taro.navigateTo({
      url: `../../../../../pages/cateSub/index?type=fushi&cate=month&title=${item.text}&key=${item.key}`
    })
  }

  render () {
    return (
        <View className='index-icon'>
          {/* 月龄 */}
            {FLITER_NAV && FLITER_NAV[0].subList.map((item:any) => {
                return <View className='index-icon_item' onClick={this.handelJumpCateSub.bind(this, item)}>
                    <Image className='index-icon_item-img' src={item.imgURL} lazyLoad mode='scaleToFill'/>
                    <View className='index-icon_item-text' style={{color: item.textColor}}>{item.text}</View>
                </View>
            })}
        </View>
    )
  }
}
