import React, {Component} from "react";
import { View } from '@tarojs/components';
import './index.scss'

import WaterfallItem from "./WaterfallItem";

interface propType {
    feedData: any // 瀑布流数据
    feedHasMore: boolean
    feedLoading: boolean
    isPull: boolean
    isFail: boolean
}

export default class Waterfall extends Component<propType> {

    constructor (props) {
        super(props)
        this.state = {
            _centerHeight: [0, 0], // 0,0表示左右两边累计高度
            leftData: [], // 左侧数据
            rightData: [], //
            _temp: 0, // 当前计算完的索引值
            calcHeightAll: 0, //当前计算的高度
        }
    }

    componentDidMount() {
        // 将【最新10条】数据五五分成2组
        let {feedData} = this.props
        let {_temp, leftData, rightData, _centerHeight } = this.state;
        let leftHeight = _centerHeight[0];
        let rightHeight = _centerHeight[1];
        for (let i = _temp, len = feedData.length; i < len; i++) {
            let item = this.calHeightHandle(feedData[i]);
            if (leftHeight <= rightHeight) {
                leftData.push(item);
                leftHeight += item.calcHeight;
            } else {
                rightData.push(item);
                rightHeight += item.calcHeight;
            }
        }
        this.setState ({
            _temp: feedData.length,
            leftData,
            rightData,
            _centerHeight: [leftHeight, rightHeight],
        })
    }

    componentWillReceiveProps (nextProps) {
        // 将【最新10条】数据五五分成2组
        let {feedData} = this.props
        let {_temp, leftData, rightData, _centerHeight } = this.state;
        let leftHeight = _centerHeight[0];
        let rightHeight = _centerHeight[1];
        for (let i = _temp, len = feedData.length; i < len; i++) {
            let item = this.calHeightHandle(feedData[i]);
            if (leftHeight <= rightHeight) {
                leftData.push(item);
                leftHeight += item.calcHeight;
            } else {
                rightData.push(item);
                rightHeight += item.calcHeight;
            }
        }
        this.setState ({
            _temp: feedData.length,
            leftData,
            rightData,
            _centerHeight: [leftHeight, rightHeight],
        })
    }

    calHeightHandle (data:any = {}) {
        const { picUrl = '', title = '', subTitle = '', recReason = '', tags = [], salary = '', salaryPrice = '', desc = {}, actionName = '',} = data;

        const { headPic, userDesc } = desc || {};
        const numReg = /-?\d*(\.?)(\+?)(\:?)\s*/g;
        const titleNumLength = (title.match(numReg) || []).join('').length;
        const Key_Height_Map = new Map([
            ['picUrl', !!picUrl ? 260 : 0],
            ['title', title.length - titleNumLength / 2 > 11 ? 84 : 42],
            ['subTitle', !!subTitle ? 42 : 0],
            ['recReason', !!recReason ? 40 : 0],
            ['tags', tags.length > 0 ? 46 : 0],
            ['salary', !!salary ? (!!salaryPrice ? 56 : 50) : 0],
            ['desc', !!userDesc ? (!!headPic ? 64 : 58) : 0],
            ['actionName', !!actionName ? 84 : 0],
          ]);
        const feedOtherHeight = 18 + (!!picUrl ? 36 : 48);
        return {
        ...data,
        calcHeight:
            [...Key_Height_Map.values()].reduce((prev, item) => prev + item) +
            feedOtherHeight,
        };
    }
    
    render() {
        const { feedData } = this.props
        console.log("瀑布流数据", feedData)
        const { leftData, rightData } = this.state
        console.log("left", leftData)
        return (
            <View className='water-fall'>
                {leftData.length &&<View className="water-fall__feed left">
                    { leftData.map ((item:any, index:number) => {
                        return <WaterfallItem key={index + 'left'} item={item}/>
                    })}
                </View>}
                { rightData.length &&<View className="water-fall__feed right">
                    { rightData.map ((item:any, index:number) => {
                        return <WaterfallItem key={index + 'right'} item={item}/>
                    })}
                </View>}
            </View>
        );
    }
}
