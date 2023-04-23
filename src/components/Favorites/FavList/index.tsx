import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

import favoriteIcon from '@/asset/imgs/heart.png'

import mockIcon from '@/asset/imgs/ant-design_star-filled.png'

interface propType {
    list: Array<any>
}
export default class FavList extends Component<propType>  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { list } = this.props
    return (
        <View className='fav-list'>
            { list.map(item => {
                return <View className='fav-list__item'>
                    <Image className='fav-list__item-img' src={item.imgList[0]}/>
                    <View className='fav-list__item-info'>
                        <View className='fav-list__item-info-title'>{item.title}</View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <View className='fav-list__item-info-time'>{item.time}  ·</View>
                            <View className='fav-list__item-info-favoriteNum'>
                                <Image className='fav-list__item-info-favoriteNum-icon' src={mockIcon} />
                                {item.favoriteNum}
                            </View>
                        </View>
                    </View>
                    <Image className='fav-list__item-favicon' src={favoriteIcon} />
                </View>
            })}
        </View>
    )
  }
}
