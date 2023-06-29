import { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import './index.scss'

import Taro from '@tarojs/taro'
import searchIcon from '@/asset/imgs/search.png'
import smallSearchIcon from '@/asset/imgs/icon/smallSearch.png'

import { getSearch } from './getSearch'

export default class Search extends Component  {

  state = {
    searchVal:'', // 搜索key值
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
    let key = e.target.value || this.state.searchVal
    this.setState({
      searchVal: key,
      showSearchList: false
    })

    let self = this
    key && getSearch(key, (res)=>{
      self.setState({
        searchResList: res,
        showSearchList: true
      })
    })
    !key && this.setState({
      showSearchList: false,
      searchResList: []
    })
  }

  inputValue(e) {
    let key = e.target.value
    this.setState({
      searchVal: key,
      showSearchList: false
    })
  }

  jumpDetail (item) {
    Taro.navigateTo({
      url: `../detail/index?id=${item.id}`
    })
  }

  render () {
    const { searchVal, searchResList } = this.state
    console.log("searchVal", searchVal)
    return (
        <View className='search'>
          <View className='search__wrap'>
            <Input className='search__wrap-input' value={searchVal} placeholder='今天你想吃什么' 
            placeholderTextColor="#1F272D"
            focus 
            confirmType="search" 
            // onConfirm={this.handleSearch.bind(this)}
            onBlur={this.inputValue.bind(this)}
            style={{width: '260px'}}/>
            <View className='search__wrap-btn' onClick={this.handleSearch.bind(this)}>
              {searchIcon && <Image className='search__wrap-icon' src={searchIcon} />}
            </View>
          </View>

          { true && <View className='search__res'>
            {searchResList.length > 0 && searchResList.map((item:any, index:number) => {
              return <View className='search__res-item' onClick={this.jumpDetail.bind(this, item)}>
                <Image src={smallSearchIcon} className='search__res-item-icon'/>
                <View className='search__res-item-text'>{item.recordTitle}</View>
              </View>
            })}
            {searchResList.length == 0 && <View className='search__res-no'>暂无结果</View>}
          </View>}
        </View>
    )
  }
}
