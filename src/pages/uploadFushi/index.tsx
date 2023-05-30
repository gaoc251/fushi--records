import { Component } from 'react'
import { View, Form, Input, RadioGroup, Radio, Button, Image, CheckboxGroup, Checkbox, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

import UploadImage from '@/components/Common/UploadImage'
import { Request } from '@/utils/request'
import { API_FUSHI_saveFushiRecord } from '@/data/api'
import smallAddIcon from '@/asset/imgs/icon/add.png'
import smallReduceIcon from '@/asset/imgs/icon/reduce.png'
export default class UploadFushi extends Component {
  state = {
    imgList: [],
    steps: [{ val:''}], // 步骤
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  formSubmit = e => {
    const { cate, cooking, description, effect, hard, ingredients, month, time, recordTitle, seasoning, tip} = e.detail.value
    console.log("state", this.state)
    const {imgList, steps} = this.state

    let _imgList:any = []
    imgList.forEach((item:any) => {
      _imgList.push(item.url)
    })
    let _steps:any = []
    steps.forEach((item:any) => {
      _steps.push(item.val)
    })

    if (_imgList.length == 0 || (steps.length ==1 && steps[0].val == '')) {
      Taro.showToast({
        title:'快去完善',
        icon: 'none'
      })
      return false
    }
    debugger
    // cate || cooking || description || effect || hard || ingredients || month || steps || time || recordTitle || seasoning || tip || this.state.imgList.length 
    if (true) {
      
      
      let params = {
        ingredients,
        seasoning,
        cate,
        month,
        hard,
        tip,
        steps: JSON.stringify(_steps),
        imgList: JSON.stringify(_imgList),
        cooking,
        effect,
        recordTitle,
        description,
        time
      }

      console.log('params', params)
      Request('post', API_FUSHI_saveFushiRecord, params).then((res:any) => {
        if (res.code == 0) {
          Taro.showModal({
            title: "添加成功",
            content: "还继续添加吗 ? ",
            success: function (res) {
              if(res.confirm) {
                console.log("点击确定")
              } else {
                console.log("取消")
              }
            }
          })
        }
      })
    } else {
      Taro.showToast({
        title: '请输入完整信息',
        icon: 'none'
      })
      return false
    }
    
  }

  updateImage (data) {
    let newData = data.filter(item=> {return !item.isAdd})
    this.setState({
      imgList: newData
    })
  }

  // 新增一条步骤
  handleAddStep () {
    let {steps} = this.state
    steps.push({val:''})
    this.setState({
      steps
    })
  }

  // 删除一条步骤
  handleDelStep (index) {
    let {steps} = this.state
    steps.splice(index, 1)
    this.setState({
      steps
    })
  }

  // 步骤输入值
  stepInputVal (index, e) {
    let {steps} = this.state
    steps[index].val=e.currentTarget.value
    this.setState({
      steps
    })
  }

  render() {
    const { imgList, steps } = this.state
    
    return (
      <View className='upload-fushi'>
        <Form onSubmit={this.formSubmit}>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>标题：</View>
            <Input name='recordTitle' placeholder='请输入title' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>描述：</View>
            <Input name='description' placeholder='请输入描述' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>需要时间：</View>
            <Input name='time' placeholder='请输入所需时间' />
          </View>
          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>食材：</View>
            <Input name='ingredients' placeholder='请输入食材' />
          </View>

          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>调料：</View>
            <Input name='seasoning' placeholder='请输入调料' />
          </View>

          <View className='upload-fushi__form-item uploadImg'>
            <View className='upload-fushi__form-item-title'>图片：</View>
            <View className='upload-fushi__form-item-flex1'>
              <UploadImage files={imgList} maxCount="3" onFileChange={this.updateImage.bind(this)}/>
            </View>
          </View>

          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>烹饪步骤：</View>
          </View>
          <View className='upload-fushi__form-item-steps'>
            { steps.map((item, index) => {
              return <View className='upload-fushi__form-item-steps-item'>
                    <View className='upload-fushi__form-item-steps-content'>
                      <Text style={{width: '14px'}}>{index + 1}.</Text>
                       <Input placeholder='请输入步骤' className='upload-fushi__form-item-steps-content-input' onBlur={this.stepInputVal.bind(this, index )} value={item.val}/>
                </View> 
                <View className='upload-fushi__form-item-steps-control'>
                  <Image src={smallAddIcon} className="upload-fushi__form-item-steps-control-icon" onClick={this.handleAddStep.bind(this)} />
                  {steps.length > 1 && <Image src={smallReduceIcon} className="upload-fushi__form-item-steps-control-icon"
                  onClick={this.handleDelStep.bind(this, index)} />}
                </View>
              </View>
            })}
          </View>

          <View className='upload-fushi__form-item'>
            <View className='upload-fushi__form-item-title'>注意：</View>
            <Input name='tip' placeholder='请输入注意事项' />
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
            <CheckboxGroup name='effect' className='upload-fushi__form-item-radio'>
              <View className='upload-fushi__form-item-label'><Checkbox value="补钙" />补钙</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="补铁" />补铁</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="补锌" />补锌</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="感冒咳嗽" />感冒咳嗽</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="便秘" />便秘</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="腹泻" />腹泻</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="积食" />积食</View>
              <View className='upload-fushi__form-item-label'><Checkbox value="清火" />清火</View>
            </CheckboxGroup>
          </View>
          
          <Button className='btn' formType="submit">保存</Button>
        </Form>
      </View>
    )
  }
}
