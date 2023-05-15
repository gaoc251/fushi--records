import React, {Component} from "react";
import { View, Image } from '@tarojs/components';
import classnames from 'classnames';
import './index.scss'

interface propType {
    item: {
        picUrl: string
        title: string
        subTitle: string
        salary: string
        salaryPrice: string
        salaryUnit: string
    }
}
export default class WaterfallItem extends Component<propType> {

    constructor (props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { item } = this.props
        return (
            <View className="waterfall-item">
                {item.picUrl && <Image src={item.picUrl} className="waterfall-item__pic"/>}
                <View className={classnames('waterfall-item__content', item.picUrl?'has-pic':'')}>
                    {item.title && <View className="waterfall-item__content-title">{item.title}</View>}
                    {item.subTitle && <View className="waterfall-item__content-subTitle">{item.subTitle}</View>}
                    {item.salary && <View className="waterfall-item__content-money">
                        <View className="waterfall-item__content-price">{item.salaryPrice}</View>
                        <View className="waterfall-item__content-unit">{item.salaryUnit}</View>
                    </View>}
                </View>
            </View>
        )
    }
}