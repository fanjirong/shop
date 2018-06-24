<template>
    <div class='box'>
        <header>
            <a href="#"><i class='icon iconfont icon-set' @click='set'></i></a>    
            <b @click='set2'>我的717商城</b>
            <a  href="#"><i @click='set3' class='icon iconfont icon-xiaoxi'></i></a>
        </header>
        <section>
            <div class='messige'>路飞</div>
            <div class='myshop'>
                <h1>我的店铺</h1>
            </div>
            <ul>
                <li><i class='iconfont icon-gongzuo'></i>待付款</li>
                <li><i class='iconfont icon-gongzuojilu'></i>待发货</li>
                <li><i class='iconfont icon-daishouhuo-01'></i>待收货</li>
                <li><i class='iconfont icon-bianji1'></i>售后</li>
                <li><i class='iconfont icon-wodedingdan'></i>我的订单</li>
            </ul>
            <ol>
                <li>账号余额</li>
                <li>地址管理</li>
                <li>我的客服</li>
            </ol>
            <Toast ref='toast'></Toast>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            set(){
                this.$refs.toast.active('are you sure ?')
            },
            set2(){
                this.$refs.toast.active('yes')
            },
            set3(){
                this.$refs.toast.active('ok')
            }
        }
    }
</script>
<style scoped>
    .box{
        width:100%;
        flex:1;
        background:#fff;
        display:flex;
        overflow:hidden;
    }
    header{
        width:100%;
        height:.8rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .2rem;
    }
    header a i,header b{
        font-size:.3rem;
    }
    section{
        flex:1;
    }
    .messige{
        width:100%;
        height:2.5rem;
        background:orange;
        text-align:center;
        line-height:3rem;
        font-size:.3rem;
    }
    .myshop{
        width:100%;
        height:2.5rem;
        line-height:2.5rem;
        margin-left:.2rem;
        border-bottom:1px solid #ccc;
    }
    .myshop h1{
        font-size:.36rem;
    }
    ul{
        display:flex;
    }
    ul li{
        width:20%;
        text-align:center;
        line-height:.5rem;
        font-size:.3rem;
    }
    ul li i{
        display:block;
        margin-top:.2rem;
    }
    
    ol{
        width:100%;
        margin-top:.2rem;
    }
    ol li{
        line-height:1rem;
        width:100%;
        border-bottom:1px solid #ccc;
        padding-left:.2rem;
        font-size:.3rem;
    }
</style>