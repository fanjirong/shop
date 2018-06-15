import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import http from '../src/component/until/http'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Loading from 'vue-lazyload'
import store from './component/store/store'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.use(Loading,{
  loading:'../static/images/loading.gif'
})

Vue.use(VueAwesomeSwiper)

Vue.use(elementui)
Vue.use(http)

new Vue({
  el: '#app',
  store:store,
  router,
  render: h => h(App)
})
