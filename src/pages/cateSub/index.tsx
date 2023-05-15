import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Taro, {getCurrentInstance} from '@tarojs/taro'

import Tab from '@/components/Cate/Tab'
import List from '@/components/Cate/List'
import { FLITER_NAV } from '@/data/constants'


import { getCateSub } from './lib/getCateSub'

export default class CateSub extends Component {
  $instance = getCurrentInstance()

  state = {
    current: 0,
    options: null, // 路由参数
    subMenu: [], // tab 数组
    list: [], // 数据列表
  }

  componentWillMount() { 
    let self = this
    // 获取路由参数
    const options = self.$instance.router.params
    
    Taro.setNavigationBarTitle({
      title: decodeURIComponent(options.title)
    })
    let obj = FLITER_NAV.filter(item => {return item.key === options.cate})
    let _subMenu:any = obj[0].subList, _index =0
    _subMenu.forEach((item, index)=>{
      if (item.key == options.key) {
        _index = index
      }
    })
    self.setState({
      options: options,
      subMenu: _subMenu,
      current: _index
    })
    
    getCateSub(options.cate || '', options.key, (data) => {
      self.setState({
        list: data
      })
    })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 切换tab标题
  handleMenu (index, key, text) {
    const { current, options } = this.state;
    if (current != index) {
      this.setState({
        current: index
      })
      Taro.setNavigationBarTitle({
        title: decodeURIComponent(text)
      })
      let self = this;
      getCateSub(options.cate || '', key, (data)=>{
        self.setState({
          list: data
        })
      })
    }
  }

  render() {
    const { current, subMenu, list } = this.state
    
    return (
      <View className='cate-sub'>
        <View className='cate-sub__menu'>
          <Tab
            list={subMenu}
            current={current}
            onChange={this.handleMenu.bind(this)}
            type='month'
          />
        </View>
        <List list={list} />
      </View>
    )
  }
}
