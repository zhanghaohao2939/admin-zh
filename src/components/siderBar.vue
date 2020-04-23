<template>
    <div class='sidebar'>
        <el-menu 
            class="el-menu-demo" 
            mode="vertical" 
            background-color="#324157" 
            text-color="#bfcbd9" 
            active-text-color="#20a0ff" 
            :collapse="collapse" 
            unique-opened 
            router 
            collapse-transition
            :default-active="onRoutes"
        >            
            <!-- <template v-for='item in items'>
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <template v-if='subItem.subs'>
                                <el-submenu :index="subItem.index" :key="subItem.index">
                                    <template slot="title">
                                        <i :class="subItem.icon"></i>
                                        <span slot="title">{{ subItem.title }}</span>
                                    </template>
                                    <template v-for="subItems in subItem.subs">
                                        <template v-if="subItems.subs">
                                            <el-submenu :index="subItems.index" :key="subItems.index">
                                                <template slot="title">
                                                    <i :class="subItems.icon"></i>
                                                    <span slot="title">{{ subItems.title }}</span>
                                                </template>
                                            </el-submenu>
                                        </template>
                                        <template v-else>
                                            <el-menu-item :index="subItems.index" :key="subItems.index">
                                                <i :class="subItems.icon"></i>
                                                <span slot="title">{{ subItems.title }}</span>
                                            </el-menu-item>
                                        </template>
                                    </template>
                                    
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    <i :class="subItem.icon"></i>
                                    <span slot="title">{{ subItem.title }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>                
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template> -->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from './common/bus.js';
    export default{
        data(){
            return{
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'dashboard',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                icon: 'el-icon-menu',
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                icon: 'el-icon-menu',
                                index: '3-2',
                                title: '编辑器',
                                subs: [
                                    {
                                        icon: 'el-icon-menu',
                                        index: '111',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        icon: 'el-icon-menu',
                                        index: '112',
                                        title: 'markdown编辑器'
                                    }
                                ]
                            },
                            {
                                icon: 'el-icon-menu',
                                index: '113',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: '6',
                        title: '拖拽组件',
                        subs: [
                            {
                                icon: 'el-icon-menu',
                                index: 'drag',
                                title: '拖拽列表'
                            },
                            {
                                icon: 'el-icon-menu',
                                index: 'dialog',
                                title: '拖拽弹框'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-s-promotion',
                        index: 'i18n',
                        title: '国际功能'
                    },
                    {
                        icon: 'el-icon-warning',
                        index: '7',
                        title: '错误处理',
                        subs: [
                            {
                                icon: 'el-icon-menu',
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                icon: 'el-icon-menu',
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'info',
                        title: '信息管理'
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'table',
                        title: '表格管理'
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'tree',
                        title: '树形图管理'
                    },
                ]
            };

        },
        created(){
            bus.$on('getChange', (res)=> {
                console.log(res)
                this.collapse = res;
                bus.$emit('collapse-content',res)
            })
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');

            }
        },
        
    }
</script>

<style lang="less" scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    .el-menu-demo:not(.el-menu--collapse){
        width: 250px;
        height: 100%;
    }
}
::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
}
</style>