import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    list: any
    menuWidth: string
    onClick: (item)=> void
  }

export default class CateList extends Component<propType> {
    static defaultProps = {
        list: [],
    }

    handleClick = (item) => {
        this.props.onClick(item)
    }

    render () {
        const { list, menuWidth } = this.props
        return (
            <View className='cate-list' style={{width: menuWidth?`calc(100% - ${Number(menuWidth)/2}px)`:'100%'}}>
                <View className='cate-list__wrap'>
                { list.length >0 && list.map((item:any, index:number) => {
                    return <View
                        key={item.key}
                        className={classNames('cate-list__item',
                            { 'cate-list__item--right': (index + 1) % 3 === 0 }
                        )}
                        style={{width:menuWidth?`calc((100% - ${Number(menuWidth)/2}px) / 3)`:'144px'}}
                        onClick={this.handleClick.bind(this, item)}
                    >
                        {item.bannerUrl && <Image className='cate-list__item-img' src={item.bannerUrl} lazyLoad/>}
                        <View className='cate-list__item-txt-wrap'>
                            <Text className='cate-list__item-txt'>{item.text}</Text>
                        </View>
                    </View>
                })}
                </View>
            </View>
        )
    }
}