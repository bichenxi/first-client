<template>
    <div class="h-full w-full">
        <div
            class="bg-blue-900 py-3 px-3 text-white fixed w-full bottom-0 flex justify-center"
        >
            <h3 class="text-xl">
                {{ isRegister ? '注册' : '登录' }}
            </h3>
        </div>
        <div
            class="bg-blue-500 fixed top-0 w-full py-2 px-3 text-white flex justify-between"
        >
            <p>欢迎来到我们自己的开发项目</p>
            <p
                @click="switchRegister"
                class="cursor-pointer hover:text-blue-900"
            >
                {{ isRegister ? '登录' : '注册' }}账号
            </p>
        </div>
        <div class="w-full h-full flex justify-center items-center login">
            <!-- dome login -->
            <form
                v-if="!isRegister"
                class="flex-wrap space-y-3"
                @submit.prevent="submit"
            >
                <div>
                    <input
                        v-model="account"
                        type="text"
                        placeholder="账号"
                        name="account"
                        class="login-input"
                    />
                </div>
                <div>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="密码"
                        name="password"
                        class="login-input"
                    />
                </div>
                <div class="w-full flex justify-center">
                    <button
                        type="submit"
                        class="px-5 py-2 bg-blue-900 text-white"
                    >
                        登录
                    </button>
                </div>
            </form>
            <!-- dome register -->
            <form
                v-if="isRegister"
                class="flex-wrap space-y-3"
                @submit.prevent="registerHandler"
            >
                <div>
                    <input
                        type="text"
                        placeholder="姓名"
                        name="name"
                        v-model="name"
                        class="login-input"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="账号"
                        name="account"
                        v-model="account"
                        class="login-input"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="密码"
                        name="password"
                        v-model="password"
                        class="login-input"
                    />
                </div>
                <div class="w-full flex justify-center">
                    <button
                        type="submit"
                        class="px-5 py-2 bg-blue-900 text-white"
                    >
                        注册
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { register } from '../api/register'

export default {
    data: () => ({
        account: null,
        password: null,
        isRegister: false,
        name: null,
    }),

    computed: {
        ...mapState(['user']),
    },

    watch: {
        user: {
            handler(newV) {
                if (newV) {
                    this.$router.replace('/')
                }
            },
        },
    },

    methods: {
        // login
        async submit() {
            const { account, password } = this
            const data = await this.$store.dispatch('login', {
                account,
                password,
            })
            if (data) {
                this.$showModal({
                    context: data,
                })
            }
        },

        async registerHandler() {
            const { name, account, password } = this
            const date = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
            this.$catch(async () => {
                const {
                    data: { message, success },
                } = await register({
                    name,
                    account,
                    password,
                    date,
                })
                if (success) {
                    this.switchRegister()
                    this.$showModal({
                        title: '提示',
                        context: message,
                    })
                }
            })
        },

        // switch
        switchRegister() {
            this.isRegister = !this.isRegister
        },
    },
}
</script>

<style lang="postcss" scoped>
.login {
    background: url('http://bichengxi.top:4000/static/login.png') 100% 100%
        no-repeat;
}

.login-input {
    @apply bg-white border border-gray-300 w-64 h-12 p-3;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
