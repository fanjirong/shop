<template>
    <div>
        <p><label for="username">用户名</label><input type='text' placeholder='请输入手机号' name='username' v-model='username'/></p>
        <p><label for="password">密码</label><input type='password' name='password' placeholder='请输入6位以上数字' v-model='password'/></p>
        <p><label for="passwordr">密码</label><input type='password' v-model='passwordr'/></p>
        <button @click='register'>注册</button>
        
    </div>
</template>
<script>
    export  default {
        data(){
            return {
                username:'',
                password:'',
                passwordr:''
            }
        },
        methods:{
            register(){
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
                if(this.passwordr!==this.password){
                    alert('两次密码不一致')
                    return
                }
                if(this.username==''||this.password==''||this.passwordr==''){
                    alert('请补全信息')
                    return 
                }

                this.$http.post('/api/user/register',{
                    username:this.username,
                    password:this.password
                }).then(res=>{
                    if(res.code==1){
                        this.$router.push('/login')
                    }
                })
            }
        }
    }
     
</script>
<style lang="">
    
</style>