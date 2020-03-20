// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import axios from 'axios'
import App from './App'

import './style.css'

const http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL:'http://localhost:3000/admin/api'
})

http.interceptors.request.use(function(config) {
  if(localStorage.token){
    config.headers.Authorization = 'Bearer ' + (localStorage.token || ' ')
  }
  return config;
}, err => {
  return Promise.reject(err);
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if(err.response.data.message){
    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })
    if(err.response.status === 401){
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

Vue.prototype.$http = http

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  },
})

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
