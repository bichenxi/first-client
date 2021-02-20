<template>
    <div id="app" class="h-full">
        <router-view />
    </div>
</template>

<script>
export default {
    beforeMount() {
        const account = window.localStorage.getItem('account')
        const token = window.localStorage.getItem('token')
        if (account && token) {
            this.$store.dispatch('fetchUser', { account, token })
        }
    },
}
</script>
