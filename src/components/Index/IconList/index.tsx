import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

import { FLITER_NAV } from '@/data/constants'

export default class IconList extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='index-icon'>
            {FLITER_NAV && FLITER_NAV[0].subList.map((item:any) => {
                return <View className='index-icon_item' style={{backgroundColor: item.bgColor}}>
                    <Image className='index-icon_item-img' src={item.imgURL} lazyLoad mode='scaleToFill'/>
                    <View className='index-icon_item-text' style={{color: item.textColor}}>{item.text}</View>
                </View>
            })}
        </View>
    )
  }
}
