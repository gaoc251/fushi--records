/**
 * 常量
 */
import icon1 from '../asset/imgs/icon/home6.png'
import icon2 from '../asset/imgs/icon/home4.png'
import icon3 from '../asset/imgs/icon/home1.png'
import icon4 from '../asset/imgs/icon/home2.png'
import icon5 from '../asset/imgs/icon/home5.png'
import icon6 from '../asset/imgs/icon/home3.png'
// 筛选类别对象
const FLITER_NAV = [
    {
        text: '月龄查询',
        key: 'month',
        subList: [{
            key: '6-7',
            text: '6-7月',
            textColor: '#E23D24',
            imgURL: icon1,
            bgColor: '#FFE2DE'
        },{
            key: '8-9',
            text: '8-9月',
            textColor: '#FF9B00',
            imgURL: icon2,
            bgColor: '#FFF5E5'
        },{
            key: '10-11',
            text: '10-11月',
            textColor: '#186DDD',
            imgURL: icon3,
            bgColor: '#F3F8FD'
        },{
            key: '12',
            text: '1周以上',
            textColor: '#E23D24',
            imgURL: icon4,
            bgColor: '#f1fcff'
        },{
            key: '24',
            text: '2周以上',
            textColor: '#FF9B00',
            imgURL: icon5,
            bgColor: '#FFD4D4'
        },
        // {
        //     key: '36',
        //     text: '3周以上',
        //     textColor: '#186DDD',
        //     imgURL: icon6,
        //     bgColor: '#FFFDEB'
        // }
    ]
    }, {
        text: '品类查询',
        key: 'cate',
        subList: [{
            key: '0',
            text: '主食'
        },{
            key: '1',
            text: '面食'
        },{
            key: '2',
            text: '泥糊'
        },{
            key: '3',
            text: '零食'
        },{
            key: '4',
            text: '肉蛋'
        },{
            key: '5',
            text: '炒菜'
        },{
            key: '6',
            text: '海鲜'
        }]
    }, {
        text: '烹饪方法',
        key: 'cooking',
        subList: [{
            key: '0',
            text: '蒸'
        },{
            key: '1',
            text: '炒'
        },{
            key: '2',
            text: '煎'
        },{
            key: '3',
            text: '搅拌'
        },{
            key: '4',
            text: '煮'
        },{
            key: '5',
            text: '烘焙'
        },{
            key: '6',
            text: '炖'
        }]
    }, 
    // {
    //     text: '功能',
    //     key: 'effect',
    //     subList: [{
    //         key: '0',
    //         text: '补钙'
    //     }, {
    //         key: '1',
    //         text: '补铁'
    //     }, {
    //         key: '2',
    //         text: '补锌'
    //     }, {
    //         key: '3',
    //         text: '感冒'
    //     }, {
    //         key: '4',
    //         text: '便秘'
    //     }, {
    //         key: '5',
    //         text: '腹泻'
    //     }, {
    //         key: '6',
    //         text: '积食'
    //     }, {
    //         key: '7',
    //         text: '清火'
    //     }]
    // }, 
    // {
    //     text: '三餐',
    //     key: 'meals',
    //     subList: [{
    //         key: '0',
    //         text: '早餐'
    //     }, {
    //         key: '1',
    //         text: '午餐'
    //     }, {
    //         key: '2',
    //         text: '晚餐'
    //     }, {
    //         key: '3',
    //         text: '夜宵'
    //     }]
    // }
];

const OTHER_INFO = {
    text: '喂养贴士',
    subList: [{
        text: '喂养知识',
        action: ''
    }, {
        text: '食物解析',
        action: ''
    },]
}

export {
    FLITER_NAV,
    OTHER_INFO
}
