<template>
    <div class="login-bg">
        <div class="login-content">
            <div class="login-title">闪卡云访客管理系统</div>
            <div class="login-info">
                <el-input placeholder="请输入用户名" v-model="userName" class="userName" >
                    <el-button slot="prepend" type="primary" icon="el-icon-user"></el-button>
                </el-input>
                <el-input placeholder="请输入密码" v-model="passWord" class="userName" show-password>
                    <el-button slot="prepend" type="primary" icon="el-icon-lock"></el-button>
                </el-input>
                <el-button type="primary" class="userName login-btn" @click="handleLogin">登录</el-button>
                <p class="login-tips" v-show='tipFlag'>Tip: 用户名和密码不能为空...</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
import qs from 'qs';
    export default{
        data(){
            return{
                userName: '',
                passWord: '',
                tipFlag: false,
                yzm:'qwer',
                acpid:'JtEk3r'
            }
        },
        methods:{
            handleLogin(){
                if(this.userName=='' || this.passWord ==''){
                    this.tipFlag = true;
                }else{
                    let params = {
                        accountname: this.userName,
                        accountpassword: this.passWord,
                        captchaValue: this.yzm,
                        captchaId: this.acpid
                    }
                    axios.post('api/test//orgman/orgaccountlogin',qs.stringify(params))
                    .then( (res) => {
                        console.log(res);
                        this.$message.success('登录成功');
                        localStorage.setItem('ms_username', res.data.fullname);
                        localStorage.setItem('wbsid', res.data.websid);
                        this.$router.push('/Home')
                    })
                    .catch( (err) => {
                        console.log(err);
                    })
                    
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .login-bg{
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../assets/login-bg.jpg) no-repeat;
        background-size: 100%;
        .login-content{
            position: absolute;
            left:0;
            right:0;
            top:0;
            bottom:0;
            margin:auto;
            width: 400px;
            height: 300px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.3);
            overflow: hidden;
            .login-title{
                height: 50px;
                text-align: center;
                font-size: 30px;
                color: #fff;
                border-bottom: 1px solid #ddd;
            }
            .login-info{
                width: 75%;
                margin: 0 auto;
                .userName{
                    margin: 5% 0;
                }
                .login-btn{
                    width: 100%;
                }
                .login-tips{
                    color: #fff;
                    font-size: 13px;
                    text-align: left;
                }
            }
        }
    }
    
    

</style>