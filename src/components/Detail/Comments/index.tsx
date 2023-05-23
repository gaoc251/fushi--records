import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

import likeIcon from '@/asset/imgs/icon/like.png'
import replyIcon from '@/asset/imgs/icon/reply.png'
import editIcon from '@/asset/imgs/icon/edit.png'

const res = {
    code: 0,
    message: 'success',
    data: [
        {
            id: '1', // 评论id
            date: '2018-07-05 08:30', // 发表时间
            recordId: '0000000015',
            fromId: 'errhefe232213', // 评论者
            fromName: '淅淅沥沥',
            fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
            likeNum: 3,
            content: '非常优秀',
            reply: [
                {
                    id: '2',
                    parentId: '1',
                    fromId: '2222', // 评论者
                    fromName: '3333',
                    fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                    toId: 'errhefe232213', // 评论者
                    toName: '淅淅沥沥',
                    toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                    content: '赞同，很靠谱，水平很高',
                    date: '2018-07-05 08:35' 
                },
                {
                    id: '2',
                    parentId: '1',
                    fromId: '4444', // 评论者
                    fromName: '4444',
                    fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                    toId: 'errhefe232213', // 评论者
                    toName: '淅淅沥沥',
                    toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                    content: '赞同，很靠谱，水平很高',
                    date: '2018-07-05 08:35' 
                }
            ]
        }
    ]
}

export default class Comments extends Component  {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 喜欢这个评论
  likeClick (item) {
    debugger
  }

  // 回复
  replyClick (item) {
    debugger
  }

  render () {
    const { data } = res
    return (
        <View className='detail-comments'>
            { data.length && data.map((item:any, index:number) => {
                return <View className='detail-comments__item'>
                    <View className='detail-comments__item-info'>
                        <Image src={item.fromAvatar} className="detail-comments__item-info-avatar" />
                        <View className='detail-comments__item-info-right'>
                            <View className='detail-comments__item-info-right-name'>{item.fromName}</View>
                            <View className='detail-comments__item-info-right-date'>{item.date}</View>
                        </View>
                    </View>

                    <View className='detail-comments__item-content'>{item.content}</View>

                    <View className='detail-comments__item-control'>
                        <View className='detail-comments__item-control-like' onClick={this.likeClick.bind(this, item)}>
                            <Image className='detail-comments__item-icon' src={likeIcon}/>
                            <Text className='detail-comments__item-control-like-num'>{item.likeNum > 0?item.likeNum + '人赞':'赞'}</Text>
                        </View>
                        <View className='detail-comments__item-control-reply' onClick={this.replyClick.bind(this, item)}>
                            <Image className='detail-comments__item-icon' src={replyIcon}/>
                            <Text className=''>回复</Text>
                        </View>
                    </View>

                    <View className='detail-comments__item-reply'>
                        {item.reply.length && item.reply.map((replyItem: any, index: number) => {
                            return <View className='detail-comments__item-reply-item'>
                                <View className='detail-comments__item-reply-item-content'>
                                    <Text className='detail-comments__item-reply-item-content-fromname'>{replyItem.fromName}</Text>
                                    <Text className='detail-comments__item-reply-item-content-toname'>@{replyItem.toName}</Text>
                                    <Text>{replyItem.content}</Text>
                                </View>

                                <View className='detail-comments__item-reply-bottom'>
                                    <Text>{replyItem.date}</Text>
                                    <View className='detail-comments__item-reply-bottom-text' onClick={this.replyClick.bind(this, item)}>
                                        <Image className='detail-comments__item-icon' src={replyIcon} />
                                        <Text className=''>回复</Text>
                                    </View>
                                </View>
                            </View>
                        })}
                    </View>

                    { item.reply.length && <View className='detail-comments__item-writeReply' onClick={this.replyClick.bind(this, item)}>
                        <Image className='detail-comments__item-icon' src={editIcon} />
                        <Text>添加新评论</Text>
                    </View>}

                </View>
            })}
        </View>
    )
  }
}
