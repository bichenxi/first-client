<template>
    <div>
        123
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${name}`"></use>
        </svg>
        456
    </div>
</template>

<script>
// Doc: https://www.iconfont.cn/help/detail?helptype=code

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
