import { Component } from 'react'
import { View, Form, Input, RadioGroup, Radio, Button, Textarea } from '@tarojs/components'
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
            <View className='upload-fushi__form-item-title'>描述：</View>
            <Input name='desc' placeholder='请输入描述' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>需要时间：</View>
            <Input name='time' placeholder='请输入所需时间' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>食材：</View>
            <Input name='ingredients' placeholder='请输入食材' />
          </View>
          <View className='upload-fushi__form-item chooseHeight'>
            <View className='upload-fushi__form-item-title'>月龄：</View>
            <View className='upload-fushi__form-item-flex1'>
              <RadioGroup name="month" className='upload-fushi__form-item-radio'>
                <View className='upload-fushi__form-item-label'><Radio value="6-7" />6-7月</View>
                <View className='upload-fushi__form-item-label'><Radio value="8-9" />8-9月</View>
                <View className='upload-fushi__form-item-label'><Radio value="10-11" />10-11月</View>
                <View className='upload-fushi__form-item-label'><Radio value="12" />1周+</View>
                <View className='upload-fushi__form-item-label'><Radio value="24" />2周+</View>
                <View className='upload-fushi__form-item-label'><Radio value="36" />3周+</View>
              </RadioGroup>
            </View>
          </View>
          <View className='upload-fushi__form-item chooseHeight'>
            <View className='upload-fushi__form-item-title'>品类：</View>
            <View className='upload-fushi__form-item-flex1'>
              <RadioGroup name="cate" className='upload-fushi__form-item-radio'>
                <View className='upload-fushi__form-item-label'><Radio value="0" />主食</View>
                <View className='upload-fushi__form-item-label'><Radio value="1" />面食</View>
                <View className='upload-fushi__form-item-label'><Radio value="2" />泥糊</View>
                <View className='upload-fushi__form-item-label'><Radio value="3" />零食</View>
                <View className='upload-fushi__form-item-label'><Radio value="4" />肉蛋</View>
                <View className='upload-fushi__form-item-label'><Radio value="5" />炒菜</View>
                <View className='upload-fushi__form-item-label'><Radio value="6" />海鲜</View>
              </RadioGroup>
            </View>
          </View>
          <View className='upload-fushi__form-item chooseHeight'>
            <View className='upload-fushi__form-item-title'>烹饪方法：</View>
            <View className='upload-fushi__form-item-flex1'>
              <RadioGroup name="cooking" className='upload-fushi__form-item-radio'>
                <View className='upload-fushi__form-item-label'><Radio value="0" />蒸</View>
                <View className='upload-fushi__form-item-label'><Radio value="1" />炒</View>
                <View className='upload-fushi__form-item-label'><Radio value="2" />煎</View>
                <View className='upload-fushi__form-item-label'><Radio value="3" />搅拌</View>
                <View className='upload-fushi__form-item-label'><Radio value="4" />煮</View>
                <View className='upload-fushi__form-item-label'><Radio value="5" />烘焙</View>
                <View className='upload-fushi__form-item-label'><Radio value="6" />炖</View>
              </RadioGroup>
            </View>
          </View>
          
          <View className='upload-fushi__form-item chooseHeight'>
            <View className='upload-fushi__form-item-title'>难易：</View>
            <RadioGroup name="hard" className='upload-fushi__form-item-radio'>
              <View className='upload-fushi__form-item-label'><Radio value="0" />0</View>
              <View className='upload-fushi__form-item-label'><Radio value="1" />1</View>
              <View className='upload-fushi__form-item-label'><Radio value="2" />2</View>
              <View className='upload-fushi__form-item-label'><Radio value="3" />3</View>
              <View className='upload-fushi__form-item-label'><Radio value="4" />4</View>
              <View className='upload-fushi__form-item-label'><Radio value="5" />5</View>
            </RadioGroup>
          </View>

          <View className='upload-fushi__form-item chooseHeight'>
            <View className='upload-fushi__form-item-title'>功效：</View>
            <RadioGroup name="effect" className='upload-fushi__form-item-radio'>
              <View className='upload-fushi__form-item-label'><Radio value="0" />补钙</View>
              <View className='upload-fushi__form-item-label'><Radio value="1" />补铁</View>
              <View className='upload-fushi__form-item-label'><Radio value="2" />补锌</View>
              <View className='upload-fushi__form-item-label'><Radio value="3" />感冒咳嗽</View>
              <View className='upload-fushi__form-item-label'><Radio value="4" />便秘</View>
              <View className='upload-fushi__form-item-label'><Radio value="5" />腹泻</View>
              <View className='upload-fushi__form-item-label'><Radio value="6" />积食</View>
              <View className='upload-fushi__form-item-label'><Radio value="7" />清火</View>
            </RadioGroup>
          </View>

          <View className='upload-fushi__form-item uploadImg'>
            <View className='upload-fushi__form-item-title'>图片：</View>
            <View className='upload-fushi__form-item-flex1'>
              <UploadImage files={imgList} maxCount="3" onFileChange={this.updateImage.bind(this)}/>
            </View>
          </View>

          <View className='upload-fushi__form-item uploadImg'>
            <View className='upload-fushi__form-item-title'>烹饪步骤：</View>
            <View className='upload-fushi__form-item-flex1'>
              <Textarea autoHeight name="steps" placeholder="请输入步骤" style='background:#fff;width:90%;min-height:80px;padding:10px; border:1px solid #eee'/>
            </View>
          </View>
          
          <Button className='btn' formType="submit">submit</Button>
        </Form>
      </View>
    )
  }
}
