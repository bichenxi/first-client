import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'
// https://day.js.org/zh-CN/
import dayjs from 'dayjs'

// 使用 element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// $catch
import catchFn from './utils/catch'

// iconFont svg
import '../svg/iconfont'
// 将 iconfont 变为全局组件
import iconFont from './components/IconFont'
Vue.component('icon-font', iconFont)

// 弹窗全局注入弹窗
import './utils/showModule'

// compositionAPi
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

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

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
