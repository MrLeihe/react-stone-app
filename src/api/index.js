import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://cnodejs.org/api/v1/'
})

// 请求拦截器
axios.interceptors.request.use(config => {
    // post请求设置修改config参数
    if (config.method === 'post') {
        config.data = Object.assign({
            accesstoken: ''
        }, config.data)
    } else if (config.method === 'get') {
        // get请求设置修改config参数
        config.params = Object.assign({
            accesstoken: ''
        }, config.params)
    }
}, e => {
    return Promise.reject(e)
})

// 响应拦截器
axios.interceptors.response.use(res => {
    return res
}, e => {
    return Promise.reject(e)
})

export default axios