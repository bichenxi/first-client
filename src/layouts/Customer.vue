<template>
    <div
        v-loading="loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        element-loading-spinner="el-icon-loading"
        element-loading-text="正在为您修改"
        class="bg-gray-100"
    >
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
                            <span v-if="!nameState">{{ user.name }}</span>
                            <input
                                ref="name"
                                @blur="leave('nameState')"
                                v-else
                                type="text"
                                v-model="focus"
                                class="flex-1 pr-5"
                            />
                        </div>
                        <div
                            @click="handleFocus('name')"
                            v-if="!nameState"
                            class="text-blue-500"
                        >
                            <i class="el-icon-edit mr-4 text-xl"></i>
                            <span>修改</span>
                        </div>
                        <div v-else>
                            <span
                                @click="save({ name: focus })"
                                class="text-blue-500 cursor-pointer"
                            >
                                保存
                            </span>
                            <span class="ml-3 cursor-pointer">取消</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">邮箱</div>
                            <span v-if="!emailState">{{ user.email }}</span>
                            <input
                                ref="email"
                                @blur="leave('emailState')"
                                v-else
                                type="text"
                                v-model="focus"
                                class="flex-1 pr-5"
                            />
                        </div>
                        <div
                            @click="handleFocus('email')"
                            v-if="!emailState"
                            class="text-blue-500"
                        >
                            <i class="el-icon-edit mr-4 text-xl"></i>
                            <span>修改</span>
                        </div>
                        <div v-else>
                            <span
                                @click="save({ email: focus })"
                                class="text-blue-500 cursor-pointer"
                            >
                                保存
                            </span>
                            <span class="ml-3 cursor-pointer">取消</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">电话</div>
                            <span v-if="!phoneState">{{ user.phone }}</span>
                            <input
                                ref="phone"
                                @blur="leave('phoneState')"
                                v-else
                                type="text"
                                v-model="focus"
                                class="flex-1 pr-5"
                            />
                        </div>
                        <div
                            @click="handleFocus('phone')"
                            v-if="!phoneState"
                            class="text-blue-500"
                        >
                            <i class="el-icon-edit mr-4 text-xl"></i>
                            <span>修改</span>
                        </div>
                        <div v-else>
                            <span
                                @click="save({ phone: focus })"
                                class="text-blue-500 cursor-pointer"
                            >
                                保存
                            </span>
                            <span class="ml-3 cursor-pointer">取消</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div class="w-32">联系地址</div>
                            <span v-if="!addressState">{{ user.address }}</span>
                            <input
                                ref="address"
                                @blur="leave('addressState')"
                                v-else
                                type="text"
                                v-model="focus"
                                class="flex-1 pr-5"
                            />
                        </div>
                        <div
                            @click="handleFocus('address')"
                            v-if="!addressState"
                            class="text-blue-500"
                        >
                            <i class="el-icon-edit mr-4 text-xl"></i>
                            <span>修改</span>
                        </div>
                        <div v-else>
                            <span
                                @click="save({ address: focus })"
                                class="text-blue-500 cursor-pointer"
                            >
                                保存
                            </span>
                            <span class="ml-3 cursor-pointer">取消</span>
                        </div>
                    </div>
                    <div
                        class="py-5 border-b border-gray-300 flex justify-between items-center"
                    >
                        <div class="flex flex-1">
                            <div v-if="!addressState" class="w-32">
                                个人介绍
                            </div>
                            <span v-if="!customerState">
                                {{ user.customerText }}
                            </span>
                            <textarea
                                v-else
                                v-model="focus"
                                @blur="leave('customerState')"
                                maxlength="150"
                                placeholder="您最多可以输入150"
                                class="flex-1"
                            ></textarea>
                        </div>
                        <div
                            @click="handleFocus('customer')"
                            v-if="!customerState"
                            class="text-blue-500"
                        >
                            <i class="el-icon-edit mr-4 text-xl"></i>
                            <span>修改</span>
                        </div>
                        <div v-else>
                            <span
                                @click="save({ customerText: focus })"
                                class="text-blue-500 cursor-pointer"
                            >
                                保存
                            </span>
                            <span class="ml-3 cursor-pointer">取消</span>
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
import { mapState, mapMutations } from 'vuex'

// api
import { upData } from '../api/customer'

export default {
    data: () => ({
        // satte
        nameState: false,
        emailState: false,
        phoneState: false,
        addressState: false,
        customerState: false,
        loading: false,
        // 焦点
        focus: '',
    }),

    computed: {
        ...mapState(['user']),
    },

    methods: {
        ...mapMutations(['setUser']),
        signOut() {
            window.localStorage.removeItem('token')
            this.$store.commit('removeUser')
            this.$router.replace('/login')
        },

        handleFocus(params) {
            this.focus = this.user[params]
            this[params + 'State'] = true

            this.$nextTick(() => {
                this.$refs[params].focus()
            })
        },

        async save(query) {
            this.loading = true
            const {
                data: { data: data },
            } = await upData(query)
            this.setUser(data)
            setTimeout(() => {
                this.loading = false
            }, 800)
        },

        leave(params) {
            setTimeout(() => {
                this.$nextTick(() => {
                    this[params] = false
                })
            }, 500)
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
