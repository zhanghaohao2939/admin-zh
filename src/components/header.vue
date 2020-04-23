<template>
    <div class='header'>
        <div class="header-left">
            <div class="iconChange" @click='handleChange'>
                <i v-if='!collapse' class="el-icon-s-unfold"></i>
                <i v-else class="el-icon-s-fold"></i>
            </div>
            <p>闪卡云平台后台管理系统123</p>
        </div>
        <div class="header-right">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link dropName">
                    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command='changePassword'>修改密码</el-dropdown-item>
                    <el-dropdown-item command='layout' >退出登录</el-dropdown-item>                   
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import bus from './common/bus.js';
    export default{
        data(){
            return{
                collapse: false,
                name: 'ZH'
            }
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleChange(){
                this.collapse = !this.collapse;
                bus.$emit('getChange',this.collapse)
            },
            handleCommand(command) {
                if(command == 'layout'){
                    this.$router.push('Login')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 22px;
    color: #fff;
    background-color: #242f42;
    display: flex;
    justify-content: space-between;
    
    .header-left{
        display: flex;
        padding-left: 3%;
        .iconChange{
            margin-right: 2%
        }
    }
    .header-right{
        padding-right: 3%;
        .dropName{
            color: #fff;
            font-size: 22px;
        }
    }
  }
</style>