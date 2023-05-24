import { Component, ReactNode } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import viewIcon from '../../../asset/imgs/view.png'

export default class CommonItem2 extends Component  {

    jumpDetail (item) {
        this.props.jumpAction(item)
    }

    render(): ReactNode {
        const {item, img} = this.props;
        return (
            <View className='commonItem2__item' onClick={this.jumpDetail.bind(this, item)}>
                <Image src={img} className="commonItem2__item-img"/>
                <View className='commonItem2__item-info'>
                    <View className='commonItem2__item-info-title ellipsis'>{item.recordTitle}</View>
                    <View className='commonItem2__item-info-desc ellipsis'>{item.description}</View>
                    <View className='commonItem2__item-info-month'>{(item.month == 12 ||  item.month == 24 || item.month == 36)? item.month/12:item.month} {(item.month == 12 ||  item.month == 24 || item.month == 36)?'周岁':'个月'}</View>
                    <View className='commonItem2__item-info-num'>
                        <View className='commonItem2__item-info-num-item'>{item.viewNum} 次浏览</View>
                        <View className='commonItem2__item-info-num-item'>{item.favoriteNum} 次收藏</View>
                    </View>
                </View>

            </View>
        )
    }
}