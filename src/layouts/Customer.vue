<template>
    <div class="costomer bg-gray-100">
        <header class="w-100 bg-gray-900 p-3 text-white flex items-center">
            <h3 class="flex-1 text-center">个人中心</h3>
            <div>
                <router-link class="flex-1 hover:text-gray-300" to="/">
                    返回首页
                </router-link>
            </div>
        </header>
        <div class="py-20 flex justify-center">
            <div class="p-10 w-1/2 bg-white border border-gray-200">
                <div>
                    <h2 class="text-4xl pb-4 border-b border-gray-300">
                        个人资料
                    </h2>
                    <div class="py-4 border-b border-gray-300">
                        <div
                            class="h-40 w-40 rounded-full bg-red-500 text-3xl flex justify-center items-center"
                        >
                            <div>{{ user.name }}</div>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex-1 flex">
                            <div class="w-32">用户名</div>
                            <span>{{ user.name }}</span>
                            <input
                                type="text"
                                :value="user.name"
                                class="flex-1 pr-5"
                            />
                        </div>
                        <div class="text-blue-500">
                            <i class="el-icon-edit mr-4 text-2xl"></i>
                            <span>修改</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">邮箱</div>
                            <span>{{ user.email }}</span>
                            <input type="email" class="flex-1 pr-5" />
                        </div>
                        <div class="text-blue-500">
                            <i class="el-icon-edit mr-4 text-2xl"></i>
                            <span>修改</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">电话</div>
                            <span>{{ user.phone }}</span>
                            <input type="number" class="flex-1 pr-5" />
                        </div>
                        <div class="text-blue-500">
                            <i class="el-icon-edit mr-4 text-2xl"></i>
                            <span>修改</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">联系地址</div>
                            <span>{{ user.address }}</span>
                            <input type="text" class="flex-1 pr-5" />
                        </div>
                        <div class="text-blue-500">
                            <i class="el-icon-edit mr-4 text-2xl"></i>
                            <span>修改</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">个人介绍</div>
                            <textarea class="flex-1"></textarea>
                        </div>
                        <div class="text-blue-500">
                            <i class="el-icon-edit mr-4 text-2xl"></i>
                            <span>修改</span>
                        </div>
                    </div>
                    <div class="pt-8 flex justify-center">
                        <button
                            @click="signOut"
                            class="text-sm hover:text-gray-200 bg-red-600 py-2 px-4 text-white"
                        >
                            退出登录
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

// api
// import { upData } from '../api/customer'

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

<style scoped>
input,
textarea {
    outline: none;
}
input:focus,
textarea:focus {
    border: none;
}
</style>
