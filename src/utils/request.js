import Taro from "@tarojs/taro";

export async function Request(method, url, params = {}, header = {}) {
    console.log("params", params)
    // await Taro.request({
    //     url,
    //     data: params,
    //     method,
    //     header: Object.assign(header, {'Content-type': 'application/json'}),
    //     success(res) {
    //         const {code, msg, data} = res.data
    //         debugger
    //         if (code === 0) {
    //             return res.data
    //         } else {
    //             Taro.showToast({
    //                 title: '服务器异常',
    //                 icon: 'none'
    //             })
    //         }
    //     },
    //     fail: function () {
    //         Taro.showToast({
    //             title: '服务器异常',
    //             icon: 'none'
    //         })
    //     }
    // })
    return new Promise((resolve, reject) => {
        Taro.request({
            url,
            data: params,
            method,
            header: Object.assign(header, {'Content-type': 'application/json'}),
            success(res) {
                resolve(res.data)
            },
            fail (err) {
                reject(err)
                Taro.showToast({
                    title: '服务器异常',
                    icon: 'none'
                })
            }
        })
    })
}
