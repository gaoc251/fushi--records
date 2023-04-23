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
    "https://yanxuan-item.nosdn.127.net/2c74266b2f6091cf041d855935b23c9f.jpg"]
  }
}
export default class Detail extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { imgList } =res.data
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
              {/* <SwiperItem className='detail__header-swiperitem'>
                <View className='demo-text-1'>1</View>
              </SwiperItem>
              <SwiperItem>
                <View className='demo-text-2'>2</View>
              </SwiperItem>
              <SwiperItem>
                <View className='demo-text-3'>3</View>
              </SwiperItem> */}
            </Swiper>
          </View>
        </View>
    )
  }
}
