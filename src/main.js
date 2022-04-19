import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// // 全局的
// axios.defaults.baseURL = 'http://123.207.32.32:8000'

// axios({
//   // url:"httpbin.org"
//    url:"/home/multidata",
//    method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//    url:"/home/data",
//    method: 'get',
//    params:{
//      type:"pop",
//      page: 1
//    }
// }).then(res => {
//   console.log(res)
// })

// //axios 发送并发请求
// axios.all([axios({
//   url:"/home/multidata"
// }),axios({
//   url:"/home/data"
// })]).then(
//   results => {
//     console.log("here",results)
//   }
// )

//4.axios 创建实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:3000,
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// 5.封装请求
import { request } from './network/request'
request({
  url:"/home/multidata"
}).then(res => {
  console.log(res)
}).catch(err =>{
  console.log(err)
})