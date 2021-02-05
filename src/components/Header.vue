<template>
    <div
        class="bg-blue-900 py-3 px-3 text-white fixed top-0 left-0 w-full flex items-center justify-between"
    >
        <div>
            <span> {{ user.name }} 欢迎来到开发者平台 </span>
            <span class="ml-8">
                您于{{
                    $dayjs(user.last_lgoin_date).format('YYYY年MM月DD日')
                }}加入本平台
            </span>
        </div>
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

<style></style>
