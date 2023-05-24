import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

import CommonItem1 from '@/components/Common/Item1'
import CommonItem2 from '@/components/Common/Item2'

interface propsType {
  list:any // 列表数据
  type: string // 滚动方向；X 横向 Y 纵向
  title: string // 标题
}
export default class RecommendList extends Component<propsType>  {
  state = {
    // title: '大家都在看',
    // rightWrap: {
    //     text: '更多',
    //     action: 'sss'
    // }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpAction = (url) => {
    Taro.navigateTo({
        url: url
    })
  }

  jumpDetail = (item)=>{
    Taro.navigateTo({
        url: `../../pages/detail/index?id=${item.id}`
    })
  }

  render () {
    const { rightWrap } = this.state
    const { list, title, type } = this.props
    return (
        <View className='index-recommend'>
            <View className='index-recommend__header'>
                <View className='index-recommend__header-title'>{title}</View>
                { rightWrap && <View className='index-recommend__header-right' onClick={this.jumpAction.bind(this, rightWrap.action)}>{rightWrap.text}</View>}
            </View>

            {/* 横向 */}
            { type == 'X' && list.length && <ScrollView
            scrollX
            scrollWithAnimation
            className='index-recommend__content'
            >
                { list.map((item:any, index:number) => {
                    console.log("item", item)
                    let _img = item.imgList && JSON.parse(item.imgList)[0]
                    return <CommonItem1 item={item} img={_img} jumpAction={this.jumpDetail}/>
                })}
            </ScrollView>}

            {/* 纵向 */}
            { type == 'Y' && list.length > 0 && <View className='index-recommend__contentY'>
              { list.map((item:any, index:number) => {
                  console.log("item", item)
                  let _img = item.imgList && JSON.parse(item.imgList)[0]
                  return <CommonItem2 item={item} img={_img} jumpAction={this.jumpDetail}/>
              })}
            </View>}
        </View>
    )
  }
}
