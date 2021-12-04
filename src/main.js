import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'lib-flexible/flexible.js'
import dataV from '@jiaminghi/data-view'
// import echarts from "echarts";
import axios from 'axios'
import vueSeamlessScroll from 'vue-seamless-scroll'

Vue.prototype.$axios = axios;      //把axios挂载到vue上
Vue.use(vueSeamlessScroll)
Vue.prototype.$echarts = echarts;
Vue.prototype.$echarts = window.echarts
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
