<template>
    <div class="home h-full">
        <head-view />
        <el-col class="h-full" :span="12">
            <el-menu
                default-active="1"
                class="w-1/4 h-full"
                @open="open"
                @close="close"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1">
                    <i class="el-icon-edit"></i>
                    <span slot="title">写文章</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">页面配置</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-lollipop"></i>
                    <span slot="title">粉丝详情</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">查看数据</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-s-finance"></i>
                    <span slot="title">收益管理</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">消息中心</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>
<script>
import headView from '../components/Header'

export default {
    name: 'Home',

    components: {
        headView,
    },

    methods: {
        open() {},

        close() {},
    },
}
</script>
