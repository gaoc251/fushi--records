import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import { FLITER_NAV } from '@/data/constants'

export default class Recipes extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='recipes'>
            {FLITER_NAV.map((item: any, index:number) => {
                return <View className='recipes__item'>
                    <View className='recipes__item-title'>{item.text}</View>
                    <View className='recipes__item-sub'>
                    {item.subList.map(filterItem => {
                        return <View className='recipes__item-sub-item'>{filterItem.text}</View>
                    })}
                </View>
              </View>
            })}
        </View>
    )
  }
}
