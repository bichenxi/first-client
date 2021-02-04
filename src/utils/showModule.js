import Vue from 'vue'

// components
import module from '../components/Module'

const modalClass = Vue.extend({
    name: 'module',
    extends: module,

    mounted() {
        this.show()
        const handleDestroy = () => {
            this.$destroy()
        }
        // 如果父级 销毁 组件也销毁
        this.$parent.$once('hook:destroyed', handleDestroy)
    }
})

Vue.prototype.$showModal = function anonymous(propsData) {
    const modal = new modalClass({
        parent: this,
        propsData
    })

    return new Promise((resolve, reject) => {
        modal.$once('hook:destroy', () => {
            reject(false)
        })

        modal.$on('result', (val) => {
            console.log(1)
            resolve(val)
        })
        const div = document.createElement('div')
        document.body.appendChild(div)
        modal.$mount(div)
    })
}