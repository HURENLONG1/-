//这里是二次封装axios
// import axios from 'axios';//引入axios

// //封装
// let request = axios.create({
//     baseURL: '/dev-api',//基础路径
//     timeout: 3000,//设置请求超时时间：如果3秒后没有响应，就会断开请求
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest'
//     }
// })

import Vue from 'vue'
import axios from "axios" //引入

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]

axios.create({
    baseURL: 'http://47.103.194.4/taobao', //基础路径

    timeout: 3000, //设置请求超时时间：如果3秒后没有响应，就会断开请求
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})

//然后再修改原型链
Vue.prototype.$axios = axios

var request = Vue.prototype.$axios

//封装

export default request