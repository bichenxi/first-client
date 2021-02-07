<template>
    <div class="costomer">
        <h1>个人中心</h1>
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
