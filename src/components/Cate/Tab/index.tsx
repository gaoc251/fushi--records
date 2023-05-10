import { Component } from 'react'
import { View, ScrollView, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    list: any,
    current: number,
    onChange: any,
    type: string
  }

export default class CateTab extends Component<propType> {
    static defaultProps = {
        list: [],
        onChange: () => {}
    }

    handleClick = (index, id, text) => {
        this.props.onChange(index, id, text)
    }

    render () {
        const { list, current } = this.props
        return (
            <ScrollView
                scrollX
                className='cate-sub-tab'
            >
                {list.map((item: any, index) => (
                <View
                    key={item.id}
                    className='cate-sub-tab__item'
                    onClick={this.handleClick.bind(this, index, item.key, item.text)}
                >
                    <Text className='cate-sub-tab__item-txt'>{item.text}</Text>
                    {index === current &&
                    <View className='cate-sub-tab__item-line' />
                    }
                </View>
                ))}
            </ScrollView>
        )
    }
}