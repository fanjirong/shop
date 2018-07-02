import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './component/store/store'
import Vuelidate from 'vuelidate'  //表单验证 
Vue.use(Vuelidate)
import Toast from '../src/plugins/toast/toast'  //提示信息
Vue.use(Toast,{
  name:'toast',
  timeout:2000
})

import Loading from 'vue-lazyload'
Vue.use(Loading,{  //图片懒加载
  loading:'../src/assets/images/loading.gif'
})

import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementui)

import http from '../src/component/until/http'   //请求数据
Vue.use(http)

new Vue({
  el: '#app',
  store:store,
  router,
  render: h => h(App)
})
