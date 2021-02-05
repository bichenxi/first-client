import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// https://iview.github.io/components/circle
import iView from 'iview'
import '@/assets/css/tailwind.css'
// https://day.js.org/zh-CN/
import dayjs from 'dayjs'
import catchFn from './utils/catch'

// 全局注入弹窗
import './utils/showModule'
// 注入 iview ui style
import 'iview/dist/styles/iview.css';
Vue.use(iView)
Vue.config.productionTip = false

// 注入实例
Vue.prototype.$dayjs = dayjs
Vue.prototype.$catch = catchFn

// 导航前置首位
router.beforeEach((to, from ,next) => {
  if (to.name === 'Login') {
    next()
    return
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    next()
    return
  }
  next()
  router.push('/login')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
