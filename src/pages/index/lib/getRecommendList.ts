/**
 * 获取推荐数据
 */
import { API_FUSHI_getRecommendList } from "@/data/api"
import { Request } from "@/utils/request"
export async function getRecommendList (cb) {
    await Request('get', API_FUSHI_getRecommendList, {}).then((res:any) => {
        if (res.code == 0) {
            cb(res.data) 
        } else {
           console.log("接口异常了") 
        }
    })
}