import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

// 方法
import { getWindowHeight } from '@/utils/style'

interface propType {
    list: any,
    current: string,
    onClick: (key) => void
    width: string
  }

export default class CateMenu extends Component<propType> {

    handleClick = (key) => {
        this.props.onClick(key)
    }

    render () {
        const height = getWindowHeight()
        const { current, list, width } = this.props
        return (
            <View className='cate-menu' style={{width: width + 'px', height: height}}>
                { list.map((item:any) => {
                    const active = item.key === current
                    return (
                        <View
                            key={item.key}
                            className={classNames('cate-menu__item', active && 'cate-menu__item--active')}
                            onClick={this.handleClick.bind(this, item.key)}
                        >
                        <Text
                            className={classNames('cate-menu__item-name', active && 'cate-menu__item-name--active')}
                        >
                            {item.text}
                        </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}