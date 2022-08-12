// import QS from 'qs';
// const Qs = require('qs')
const baseURL:string = 'http://localhost:5000/';
const header = {
    'content-type': 'application/json', // 默认值
    'Authorization': 'xxxxxxx' //从缓存中拿到token并携带请求！
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url:string, params:object) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + url, //仅为示例，并非真实的接口地址
            method:'GET',
            data: params,
            header: header,
            success(res) {
                resolve(res.data);
            },
            fail(e) {
                reject(e);
            }
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url:string, params:object) {
	return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + url, //仅为示例，并非真实的接口地址
            method:'POST',
            data: params,
            header: header,
            success(res) {
                resolve(res.data);
            },
            fail(e) {
                reject(e);
            }
        })
    });
}