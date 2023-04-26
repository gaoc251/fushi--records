import { Component } from 'react'
import { View, Form, Input, RadioGroup, Radio, Label, Button } from '@tarojs/components'
import './index.scss'

import UploadImage from '@/components/Common/UploadImage'

export default class UploadFushi extends Component {
  state = {
    imgList: []
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  formSubmit = e => {
    console.log(e.detail.value)
  }

  updateImage (data) {
    let newData = data.filter(item=> {return !item.isAdd})
    this.setState({
      imgList: newData
    })
  }

  render() {
    const { imgList } = this.state
    return (
      <View className='upload-fushi'>
        <Form onSubmit={this.formSubmit}>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>标题：</View>
            <Input name='title' placeholder='请输入title' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>难易：</View>
            <RadioGroup name="hard">
              <Label><Radio value="0" />0</Label>
              <Label><Radio value="1" />1</Label>
              <Label><Radio value="2" />2</Label>
              <Label><Radio value="3" />3</Label>
            </RadioGroup>
          </View>

          <View className='upload-fushi__form-item uploadImg'>
            <View className='upload-fushi__form-item-title'>图片：</View>
            <View className='upload-fushi__form-item-upload'>
              <UploadImage files={imgList} maxCount="3" onFileChange={this.updateImage}/>
            </View>
          </View>
          
          <Button className='btn' formType="submit">submit</Button>
        </Form>
      </View>
    )
  }
}
