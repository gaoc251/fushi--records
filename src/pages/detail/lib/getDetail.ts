/**
 * 获取列表数据
 */
import { Request } from '@/utils/request'
import { API_FUSHI_getFushiDetail } from '@/data/api'

export function getDetail (id, openId, cb) {
    Request('get', API_FUSHI_getFushiDetail, {id, openId}).then((res:any) => {
        if (res.code == 0) {
            cb(res.data)
        } else {
           console.log("接口异常了") 
        }
    })
}