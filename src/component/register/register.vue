<template>
    <div class='register'>
        <h1>注册</h1>
        <p><label for="username">用户名:</label><input type='text' placeholder='请输入手机号' name='username' v-model='username'/></p>
        <p><label for="password">密 码:</label><input type='password' name='password' placeholder='请输入6位以上数字' v-model='password'/></p>
        <p><label for="passwordr">密 码:</label><input type='password' v-model='passwordr'/></p>
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
<style scoped>
.register{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    background:#fff;
}
h1{
    text-align:center;
    line-height:1.5rem;
    font-size:.5rem;
    font-weight:bold;
    color:orange;
}
    label{
        font-size:.3rem;
        margin-left:.2rem;
    }
    input{
        width:80%;
        height:.8rem;
        margin-top:.2rem;
    }
    button{
        width:80%;
        height:.8rem;
        margin-lefT:10%;
        margin-top:.3rem;
        background:orange;
        border:0;
        border-radius:.2rem;
        color:#fff;
    }
</style>