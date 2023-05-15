import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import './index.scss'

interface propType {
    list: any
}

export default class List extends Component<propType> {
    static defaultProps = {
        list: []
    }

    handleClick = (item)=>{
        Taro.navigateTo({
            url: `../../pages/detail/index?id=${item.id}`
        })
    }

    render () {
        const { list } = this.props
        return (
            <View className='listC'>
                <View className='listC__list'>
                    { list.map((item:any) => {
                        let imgItem = item && JSON.parse(item.imgList)[0]
                        return (<View 
                            key={item.id}
                            className='listC__list-item'
                            onClick={this.handleClick.bind(this, item)}>
                                <Image className='listC__list-item-img' src={imgItem} mode='scaleToFill'/>
                                {!!item.description &&
                                    <Text className='listC__list-item-desc' numberOfLines={1}>
                                        {item.description}
                                    </Text>
                                }

                                <View className='listC__list-item-info'>
                                    
                                    <Text className='listC__list-item-name' numberOfLines={1}>
                                        {item.recordTitle}
                                    </Text>

                            </View>

                        </View>)
                    })}
                </View>
            </View>
        )
    }
}
