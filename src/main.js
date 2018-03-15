// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import $ from 'jquery'

import './assets/css/animate.min.css'
import './assets/css/base.css'  
import './assets/css/aos.css'  
import './assets/css/common.css'  
import './assets/js/aos'
import './assets/js/banner'
Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

