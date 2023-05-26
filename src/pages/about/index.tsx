import { Component, ReactNode } from 'react'
import { View } from '@tarojs/components'
import './index.scss'


export default class About extends Component  {
    render(): ReactNode {
        return (
            <View className='about'>
                <View className='about__title '>如果有问题，或者咨询</View>
                
                <View className='about__content'>现阶段功能还不完善，请移驾到小红书或者抖音，搜索：闹腾的baby</View>
                <View className='about__title about__title-line'>我是谁</View>
                
                <View className='about__content'>一个90后宝妈;</View>
                <View className='about__content'>高危产妇;</View>
                <View className='about__content'>互联网农民;</View>
     
                <View className='about__title about__title-line'>宝妈</View>
                <View className='about__content'>暖宝是38周的时候催产出生的，出生时体重5.2斤。在刚刚出生2个小时宝宝因为血糖低住了2周的医院。后面有出现病理性的黄疸，检查后发现是ABO溶血。经过漫长的等待她出院了，随着和母乳黄疸有严重了，医生建议停掉母乳改成奶粉，结果她又开始乳糖不耐受，吐了一晚上。大家的心都揪在了一起。最后没办法黄疸就只能放任了，差不多2个月的时候黄疸彻底消失了。完全从一个小黄人变成了一个小白蛋蛋。</View>

                <View className='about__content about__title-line'>相信一切都会好起来的~~~</View>

                <View className='about__title about__title-line'>高危产妇;</View>
                <View className='about__content about__title-line'>妊娠高血压；妊娠糖尿病；子宫肌瘤；贫血</View>
                <View className='about__content about__title-line'>因为高危，北京的医院检查的很详细，医生和护士非常好；因为大家的细心照顾，宝宝和我都很健康。感恩所有~~</View>

                <View className='about__title about__title-line'>互联网农民;</View>
                <View className='about__content about__title-line'>一个6年的前端开发工程师，体会了一个宝妈在职场的人情冷暖。闲来无事做个小程序把暖宝的辅食，孕期的经历记录一下，希望可以帮助到你</View>

            </View>
        )
    }
}