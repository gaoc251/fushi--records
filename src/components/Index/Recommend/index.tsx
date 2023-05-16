import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import viewIcon from '../../../asset/imgs/view.png'
export default class RecommendList extends Component  {
  state = {
    title: '大家都在看',
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
    const { title, rightWrap } = this.state
    const { list } = this.props
    return (
        <View className='index-recommend'>
            <View className='index-recommend__header'>
                <View className='index-recommend__header-title'>{title}</View>
                { rightWrap && <View className='index-recommend__header-right' onClick={this.jumpAction.bind(this, rightWrap.action)}>{rightWrap.text}</View>}
            </View>

            { list.length && <ScrollView
            scrollX
            scrollWithAnimation
            className='index-recommend__content'
            >
                { list.map((item:any, index:number) => {
                    console.log("item", item)
                    let _img = item.imgList && JSON.parse(item.imgList)[0]
                    return <View className='index-recommend__content-item' onClick={this.jumpDetail.bind(this, item)}>
                        <Image src={_img} className="index-recommend__content-item-img"/>
                        <View className='index-recommend__content-item-info'>
                            <View className='index-recommend__content-item-info-title ellipsis'>{item.recordTitle}</View>
                            <View className='index-recommend__content-item-info-desc ellipsis'>{item.description}</View>
                        </View>

                        <View className='index-recommend__content-item-fav'>
                            <Image className='icon' src={viewIcon} />
                            {item.viewNum}
                        </View>
                    </View>
                })}
            </ScrollView>}
        </View>
    )
  }
}
