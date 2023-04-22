import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

import { FLITER_NAV } from '@/data/constants'

export default class OtherCate extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='index-other'>
          {FLITER_NAV.map((item: any, index:number) => {
            if (item.key != 'month') {
              return <View className='index-other__item'>
                <View className='index-other__item-title'>{item.text}</View>
                <View className='index-other__item-sub'>
                  {item.subList.map(filterItem => {
                    return <View className='index-other__item-sub-item'>{filterItem.text}</View>
                  })}
                </View>
              </View>
            }
          })}
        </View>
    )
  }
}
