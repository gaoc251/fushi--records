import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import classNames from 'classnames'
import './index.scss'

interface stateType {
    count_line: number
}

import favorIcon from '@/asset/imgs/favorite.png'
import aboutIcon from '@/asset/imgs/about.png'
import fankuiIcon from '@/asset/imgs/fankui.png'

const menu =[
    // {
    //     icon: favorIcon,
    //     text: '我的收藏',
    //     key: 'favorite',
    //     action: '/pages/favorites/index?'
    // }, 
    {
        icon: aboutIcon,
        text: '关于我们',
        key: 'about',
        action: '/pages/about/index'
    }, 
    {
        icon: fankuiIcon,
        text: '意见反馈',
        key: 'feedback',
        action: '/pages/feedback/index'
    }
]

export default class Menu extends Component<any, stateType> {

    constructor (props) {
        super(props)
        this.state = { // 用户信息
            count_line: 3
        }
    }

    componentWillMount () {
        
    }

    jumpAction (item) {
        item.key == 'favorite' && Taro.switchTab({
            url: item.action
        })
        item.key != 'favorite' && Taro.navigateTo({
            url: item.action
        })
    }
    
    render () {
        const {count_line} = this.state

        return (
            <View className='user-menu'>
                {menu && menu.map((item, index:number) => {
                    return <View className='user-menu__item' onClick={this.jumpAction.bind(this, item)}>
                        <Image className="user-menu__item-icon" src={item.icon} />  
                        <View className='user-menu__item-txt'>{item.text}</View>
                    </View>
                })}
            </View>
        )
    }
}
