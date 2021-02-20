<template>
    <div class="costomer">
        <header class="w-100 bg-gray-900 p-3 text-white flex justify-center">
            <div><router-link to="/"> 返回首页 </router-link></div>
            <h3>个人中心</h3>
        </header>
        <button @click="signOut" class="text-sm hover:text-gray-300">
            退出登录
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['user']),
    },

    methods: {
        signOut() {
            window.localStorage.removeItem('token')
            this.$store.commit('removeUser')
            this.$router.replace('/login')
        },
    },
}
</script>
