import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

const res = {
  code: '0',
  msg: 'success',
  data: {
    imgList: ["https://pic1.58cdn.com.cn/anjuke_58/b73afd4d32ab824497ddb71a074085b6?w=750&h=562&crop=1&w=696&h=522&crop=1&t=1&srotate=1",
    "https://yanxuan-item.nosdn.127.net/827b4573b699b9c6a33edc969979e01b.jpg",
    "https://yanxuan-item.nosdn.127.net/27553eecdc2647245399af9022bd179a.jpg",
    "https://yanxuan-item.nosdn.127.net/5718cb5ce75b2df5881cfc9ebc97887a.jpg",
    "https://yanxuan-item.nosdn.127.net/2c74266b2f6091cf041d855935b23c9f.jpg"],
    title: '蛋炒饭',
    ingredients: '苹果',
    seasoning: '无',
    cooking: 0,
    hard: 0,
    month: '6',
    tip: 'mmmmmmm',
    steps: [
      '1、少时诵诗书所所所',
      '2、少时诵诗书所所所',
      '3、少时诵诗书所所所'
    ]
  }
}

import favIcon from '@/asset/imgs/favorite-default.png'

const cookingText = {
  0: '蒸',
  1: '炒',
  2: '煎',
  3: '搅拌',
  4: '煮',
  5: '烘焙',
  6: '炖'
}
export default class Detail extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { imgList,title, ingredients, seasoning, month, cooking, hard, tip, steps } =res.data
    return (
        <View className='detail'>
          <View className='detail__header'>
            <Swiper
              className='detail__header-swiper'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots>
                {imgList && imgList.map((item:string) => {
                  return <SwiperItem className='detail__header-swiperitem'>
                    <Image src={item}  className="detail__header-swiperitem-img" mode='scaleToFill'/>
                  </SwiperItem>
                })}
            </Swiper>
          </View>

          <View className='detail__title'>{title}</View>

          <View className='detail__info'>
            <View>食材：{ingredients}</View>
            <View>调料：{seasoning}</View>
            <View>烹饪方法{cookingText[cooking]}</View>
            <View>月龄：{month}</View>
            <View>难易程度：{hard} 级</View>
            <View>注意：{tip}</View>
          </View>

          <View className='detail__steps'>
            <View className='detail__steps-title'>步骤：</View>
            { steps.map((item: any)=>{
              return <View className=''>{item}</View>
            })}
          </View>

          <Image src={favIcon} className='detail__favicon'/>
        </View>
    )
  }
}
