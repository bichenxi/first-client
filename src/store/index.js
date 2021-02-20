import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, query) {
            state.user = query
        },

        removeUser(state) {
            state.user = null
        },
    },
    actions: {
        async login(store, query) {
            const { data } = await axios.post('register/login', query)
            if (!data.success) return data.message
            store.commit('setUser', data)
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('account', data.account)
        },

        async fetchUser(store, query) {
            const { data } = await axios.post('register/user', query)
            store.commit('setUser', data)
        },
    },
    modules: {},
})
