/**
 * 模糊搜索
 */
import { API_FUSHI_getSearch } from "@/data/api"
import { Request } from "@/utils/request"
export async function getSearch (val, cb) {
    await Request('get', API_FUSHI_getSearch, {keyword: val}).then((res:any) => {
        if (res.code == 0) {
            cb(res.data) 
        } else {
           console.log("接口异常了") 
        }
    })
}