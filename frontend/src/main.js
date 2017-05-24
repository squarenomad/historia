// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import auth from './utils/auth'

import '../node_modules/tippy.js/dist/tippy.css'

var HTTP = axios.create({
  baseURL: process.env.BACKEND_URL
})

HTTP.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Do something with backend response error
  if (error.response) {
    if (error.response.status === 401) {
      console.log('backend says: unauthorized with message: ', error.response.data)
      auth.logout()
      router.replace('/')
    }
  }
  return Promise.reject(error)
})

require('bootstrap-css-only')

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.prototype.$http = HTTP

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
