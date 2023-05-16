import { Component } from 'react'
import './app.scss'
import Taro from '@tarojs/taro'
import { getOpenId } from '@/utils/util'

class App extends Component {

  componentWillMount(): void {
    let openId = Taro.getStorageSync('openId')
    !openId && getOpenId ()
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
