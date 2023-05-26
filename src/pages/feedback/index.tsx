import { Component, ReactNode } from 'react'
import { View } from '@tarojs/components'
import './index.scss'


export default class Feedback extends Component  {
    render(): ReactNode {
        return (
            <View className='feedback'>
                <View className='feedback__title '>如果有问题，或者咨询</View>
                
                <View className='feedback__content'>现阶段功能还不完善</View>
                <View className='feedback__content feedback__title-line'>请移驾到小红书或者抖音，搜索：闹腾的baby</View>

            </View>
        )
    }
}