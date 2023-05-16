import { Component } from 'react'
import { View, Text, Input, Image } from '@tarojs/components'
import './index.scss'

import searchIcon from '../../asset/imgs/search.png'

import IconList from '@/components/Index/IconList/index'
import RecommendList from '@/components/Index/Recommend'
import OtherCate from '@/components/Index/OtherCate'

import { getRecommendList } from './lib/getRecommendList'
export default class Index extends Component {
  state = {
    recommendList: [], // 大家都在看
  }
  async componentWillMount () {
    let self = this
    await getRecommendList ((list)=>{
      self.setState({
        recommendList: list
      })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {recommendList} = this.state
    return (
      <View className='index'>
        {/* header */}
        <View className='index__header'>
          <View className='index__header-search'>
            <Input className='index__header-search-input' value='' placeholder='今天你想吃什么' placeholderTextColor="#1F272D"/>
            <View className='index__header-search-btn'>
              {searchIcon && <Image className='index__header-search-icon' src={searchIcon}/>}
            </View>
          </View>
        </View>
        
        {/* icon */}
        <IconList />

        {/* 大家都在看 */}
        <RecommendList list={recommendList}/>

        {/* 其他筛选项 */}
        <OtherCate />
      </View>
    )
  }
}
