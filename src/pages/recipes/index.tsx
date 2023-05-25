import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import { FLITER_NAV } from '@/data/constants'
import Taro from '@tarojs/taro'
import Menu from '@/components/Recipes/Menu/index'
import List from '@/components/Recipes/List/index'
export default class Recipes extends Component  {

  state={
    chooseType: 'month', // 默认选中 月龄
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpList (item) {
    // console.log("筛选项", item.key, parent.key)
    Taro.navigateTo({
      url: `../../../../../pages/cateSub/index?type=fushi&cate=${this.state.chooseType}&title=${item.text}&key=${item.key}`
    })
  }

  handleMenu (key) {
    this.setState({ chooseType: key })
  }

  render () {
    const { chooseType } = this.state
    let subList = FLITER_NAV.filter(item=>{return item.key == chooseType})[0].subList

    return (
        <View className='recipes'>
            {/* {FLITER_NAV.map((item: any, index:number) => {
                return <View className='recipes__item'>
                    <View className='recipes__item-title'>{item.text}</View>
                    <View className='recipes__item-sub'>
                    {item.subList.map(filterItem => {
                        return <View className='recipes__item-sub-item' onClick={this.jumpList.bind(this, filterItem, item)}>{filterItem.text}</View>
                    })}
                </View>
              </View>
            })} */}


          <Menu
            current={chooseType}
            list={FLITER_NAV}
            onClick={this.handleMenu.bind(this)}
            width={'80'}
          />
          <List list={subList} menuWidth={'80'} onClick={this.jumpList.bind(this)}/>
        </View>
    )
  }
}
