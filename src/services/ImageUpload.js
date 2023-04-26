/**
 * 图片上传
 */
import Taro from "@tarojs/taro"
export function ImageUpload (filePath) {
    console.log("filePath", filePath)
 
    return Taro.uploadFile({ 
        url: 'http://127.0.0.1:8080/uploadImg', //仅为示例，非真实的接口地址
        filePath: filePath,
        name: 'file',
        formData: {
          'files': filePath
        },
        success (res){
          const data = res.data
          console.log('图片上传',JSON.parse(data))
        }
    })
}