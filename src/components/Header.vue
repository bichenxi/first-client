<template>
    <div
        class="bg-blue-900 py-3 px-3 text-white w-full flex items-center justify-between"
    >
        <div v-if="user">
            <span> {{ user.name }} 欢迎来到开发者平台 </span>
            <span class="ml-8">
                您于{{
                    $dayjs(user.last_lgoin_date).format('YYYY年MM月DD日')
                }}加入本平台
            </span>
        </div>
        <router-link class="text-sm hover:text-gray-300" to="/Customer">
            个人中心
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['user']),
    },
}
</script>
