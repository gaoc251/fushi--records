import { Component, ReactNode } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import viewIcon from '../../../asset/imgs/view.png'

export default class CommonItem1 extends Component  {

    jumpDetail (item) {
        this.props.jumpAction(item)
    }

    render(): ReactNode {
        const {item, img} = this.props;
        return (
            <View className='commonItem1__item' onClick={this.jumpDetail.bind(this, item)}>
                <Image src={img} className="commonItem1__item-img"/>
                <View className='commonItem1__item-info'>
                    <View className='commonItem1__item-info-title ellipsis'>{item.recordTitle}</View>
                    <View className='commonItem1__item-info-desc ellipsis'>{item.description}</View>
                </View>

                <View className='commonItem1__item-fav'>
                    <Image className='icon' src={viewIcon} />
                    {item.viewNum}
                </View>
            </View>
        )
    }
}