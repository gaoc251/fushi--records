import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import { FLITER_NAV } from '@/data/constants'
import Taro from '@tarojs/taro'
export default class Recipes extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpList (item, parent) {
    // console.log("筛选项", item.key, parent.key)
    Taro.navigateTo({
      url: `../../../../../pages/cateSub/index?type=fushi&cate=${parent.key}&title=${item.text}&key=${item.key}`
    })
  }
  render () {
    return (
        <View className='recipes'>
            {FLITER_NAV.map((item: any, index:number) => {
                return <View className='recipes__item'>
                    <View className='recipes__item-title'>{item.text}</View>
                    <View className='recipes__item-sub'>
                    {item.subList.map(filterItem => {
                        return <View className='recipes__item-sub-item' onClick={this.jumpList.bind(this, filterItem, item)}>{filterItem.text}</View>
                    })}
                </View>
              </View>
            })}
        </View>
    )
  }
}
