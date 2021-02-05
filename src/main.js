import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
// https://day.js.org/zh-CN/
import dayjs from 'dayjs'
import catchFn from './utils/catch'

// 全局注入弹窗
import './utils/showModule'
Vue.config.productionTip = false

// 注入实例
Vue.prototype.$dayjs = dayjs
Vue.prototype.$catch = catchFn

// 导航前置首位
router.beforeEach((to, from, next) => {
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
    render: (h) => h(App),
}).$mount('#app')
