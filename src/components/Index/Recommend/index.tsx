import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import mockIcon from '../../../asset/imgs/ant-design_star-filled.png'
import imgIcon from '../../../asset/imgs/del/masala-papad 1.png'
const recommendList = [{
    id: 1,
    title: "面条",
    desc: "无",
    favoriteNum: 9,
    imgList: [imgIcon]
},{
    id: 2,
    title: "白水蛋",
    desc: "无",
    favoriteNum: 10,
    imgList: [imgIcon]
}]

const data = {
    title: '大家都在看',
    rightWrap: {
        text: '更多',
        action: 'sss'
    },
    list: recommendList
}

export default class RecommendList extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpAction = (url) => {
    console.log("跳转", url)
  }

  render () {
    const { title, rightWrap, list } = data
    return (
        <View className='index-recommend'>
            <View className='index-recommend__header'>
                <View className='index-recommend__header-title'>{title}</View>
                <View className='index-recommend__header-right' onClick={this.jumpAction.bind(this, rightWrap.action)}>{rightWrap.text}</View>
            </View>

            { list.length && <ScrollView
            scrollX
            scrollWithAnimation
            className='index-recommend__content'
            >
                { list.map((item:any, index:number) => {
                    console.log("item", item)
                    return <View className='index-recommend__content-item'>
                        <Image src={item.imgList[0]} className="index-recommend__content-item-img"/>
                        <View className='index-recommend__content-item-info'>
                            <View className='index-recommend__content-item-info-title'>{item.title}</View>
                            <View className='index-recommend__content-item-info-desc'>{item.desc}</View>
                        </View>

                        <View className='index-recommend__content-item-fav'>
                            <Image className='icon' src={mockIcon} />
                            {item.favoriteNum}
                        </View>
                    </View>
                })}
            </ScrollView>}
        </View>
    )
  }
}
