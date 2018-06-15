<template>
    <div>
        <p><label for="username">用户名</label><input type='text' placeholder='请输入手机号' name='username' v-model='username'/></p>
        <p><label for="password">密码</label><input type='password' name='password' placeholder='请输入6位以上数字' v-model='password'/></p>
        <button @click='login'>登录</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                username:'',
                password:'',
            }
        },
        methods:{
            login(){
                let phonereg=/^1[3578]\d{9}$/
                if(!phonereg.test(this.username)){
                    alert('请输入正确的手机号')
                    return 
                }
                let pasreg = /\d{6,}/
                if(!pasreg.test(this.password)){
                    alert('请输入正确的密码')
                    return 
                }
                if(this.username==''||this.password==''||this.passwordr==''){
                    alert('请补全信息')
                    return 
                }

                this.$http.post('/api/user/login',{
                    username:this.username,
                    password:this.password
                }).then(res=>{
                    if(res.code==1){
                        document.cookie = `token=${res.token}`
                    }
                })
            }
        }
    }
</script>
<style lang="">
    
</style>