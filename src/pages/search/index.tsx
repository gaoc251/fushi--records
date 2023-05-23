import { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import './index.scss'

import searchIcon from '@/asset/imgs/search.png'

import { getSearch } from './getSearch'

export default class Search extends Component  {

  state = {
    seachVal:'', // 搜索key值
    searchResList: [], // 搜索结果
    showSearchList: false, // 是否展示搜索结果
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 搜索操作
  handleSearch (e) {
    let key = e.target.value
    key && this.setState({
      searchVal: key,
      showSearchList: false
    })

    let self = this
    getSearch(key, (res)=>{
      self.setState({
        searchResList: res,
        showSearchList: true
      })
    })
  }

  render () {
    const { seachVal, searchResList } = this.state
    return (
        <View className='search'>
          <View className='search__wrap'>
            <Input className='search__wrap-input' value={seachVal} placeholder='今天你想吃什么' 
            placeholderTextColor="#1F272D"
            focus 
            confirmType="search" 
            onConfirm={this.handleSearch.bind(this)}/>
            <View className='search__wrap-btn' onClick={this.handleSearch.bind(this)}>
              {searchIcon && <Image className='search__wrap-icon' src={searchIcon}/>}
            </View>
          </View>

          { true && <View className='search__res'>
            {searchResList.length > 0 && searchResList.map((item:any, index:number) => {
              return <View>{item.recordTitle}</View>
            })}
            {searchResList.length == 0 && <View>暂无结果</View>}
          </View>}
        </View>
    )
  }
}
