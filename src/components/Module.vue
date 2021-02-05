<template>
    <div
        v-if="showModule"
        class="w-full h-full bg-opacity-25 bg-black fixed left-0 top-0 z-50 flex justify-center items-center"
    >
        <div class="bg-white rounded-sm w-1/5 p-3">
            <h4 class="text-left border-b border-gray-200 pb-3">{{ title }}</h4>
            <div class="my-3 line-comp-1">
                {{ context }}
            </div>
            <div class="pt-3 flex justify-center space-x-6">
                <button
                    @click="confirm"
                    class="py-2 px-3 bg-red-600 hover:bg-red-500 text-white rounded-sm"
                >
                    {{ confirmText }}
                </button>
                <button
                    @click="close"
                    class="py-2 px-3 bg-blue-500 hover:bg-blue-400 text-white rounded-sm"
                >
                    取消
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '提示',
        },
        confirmText: {
            type: String,
            default: '确认',
        },
        closeText: {
            type: String,
            default: '取消',
        },
        context: {
            type: String,
            require: true,
        },
    },

    data: () => ({
        showModule: false,
        result: null,
    }),

    methods: {
        show() {
            this.showModule = true
        },
        confirm() {
            this.result = true
            this.hide()
        },
        close() {
            this.result = false
            this.$emit('result', true)
            this.hide()
        },
        hide() {
            this.showModule = false
        },
    },
}
</script>
