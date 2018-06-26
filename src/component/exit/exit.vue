<template>
    <div class='box'>
        <header>
            设置
        </header>
        <ul>
            <li>
                <span>我的头像</span>
                <b>路飞</b>
            </li>
            <li>
                <span>用户名</span>
                <b>路飞</b>
            </li>
            <li>
                <span>我的二维码名片</span>
                <b>路飞</b>
            </li>
        </ul>
        <button @click='exit'>退出登录</button>
        <toast></toast>
    </div>
</template>
<script>
import {delCookie} from '../../component/until/util'
export default {
    data(){
        return {

        }
    },
    methods:{
        exit(){
            if(confirm('您确定要删除？')){
                delCookie('token')
                this.$toastBus.$emit('toast','删除成功')
                setTimeout(()=>{
                    this.$router.push({
                        name:'home'
                    })
                },2000)
            }
        }
    }
}
</script>
<style scoped>
    .box{
        width:100%;
        position:absolute;
        top:0;
        bottom:0;
        background:#eee;
        display:flex;
        overflow:hidden;
    }
    header{
        width:100%;
        height:.8rem;
        text-align:center;
        line-height:.8rem;
        font-size:.34rem;
        font-weight:bold;
        border-bottom:1px solid #ccc;
        background:#fff;
    }
    ul{
        width:100%;
        background:#fff;
        margin-top:.2rem;
    }
    ul li{
        line-height:.8rem;
        padding-left:.1rem;
    }
    ul li span{
        font-size:.3rem;
    }
    ul li b{
        float:right;
        margin-right:.1rem;
        font-size:.3rem;
    }
    button{
        width:70%;
        margin-lefT:15%;
        height:.8rem;
        margin-top:.3rem;
        border:0;
        background:red;
        border-radius:.2rem;
        color:#fff;
        font-size:.3rem;
    }
</style>