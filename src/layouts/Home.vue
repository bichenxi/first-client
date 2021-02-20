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
                    <router-link to="/writeArticle">
                        <div>
                            <i class="el-icon-edit"></i>
                            <span slot="title">写文章</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/pageConfig">
                        <div>
                            <i class="el-icon-menu"></i>
                            <span slot="title">页面配置</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/fansDetails">
                        <div>
                            <i class="el-icon-lollipop"></i>
                            <span slot="title">粉丝详情</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/seeDetails">
                        <div>
                            <i class="el-icon-tickets"></i>
                            <span slot="title">查看数据</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link to="/manageBenefit">
                        <div>
                            <i class="el-icon-s-finance"></i>
                            <span slot="title">收益管理</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <router-link to="/messageManagement">
                        <div>
                            <i class="el-icon-s-comment"></i>
                            <span slot="title">消息中心</span>
                        </div>
                    </router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
        <div>
            <router-view />
        </div>
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
