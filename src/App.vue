<template>
    <div id="app" class="h-full">
        <router-view />
    </div>
</template>

<script>
export default {
    beforeMount() {
        const token = window.localStorage.getItem('token')
        if (token) {
            this.$store.dispatch('fetchUser', { token })
        }
    },
}
</script>
