<template>
    <div class="home">
        <head-view />
        <div class="w-64 h-64 bg-gray-100">
            <icon-font name="icon-x" />
        </div>
    </div>
</template>
<script>
import headView from '../components/Header'
import iconFont from '../components/IconFont'

export default {
    name: 'Home',

    components: {
        headView,
        iconFont,
    },
}
</script>

<style></style>
