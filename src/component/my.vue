<template>
    <div class='box'>
        <header>
            <a href="#"><i class='icon iconfont icon-set' @click='set'></i></a>    
            <b>我的717商城</b>
            <a  href="#"><i class='icon iconfont icon-xiaoxi'></i></a>
        </header>
        <section>
            <div class='messige'>
                <p><img src="../../src/assets/images/1.png" alt=""></p>
                 路飞
            </div>
            <div class='myshop'>
                <h1>我的店铺</h1>
            </div>
            <ul>
                <li @click='manage("todfk")'><i class='iconfont icon-gongzuo'></i>待付款</li>
                <li @click='manage("todfh")'><i class='iconfont icon-gongzuojilu'></i>待发货</li>
                <li @click='manage("todsh")'><i class='iconfont icon-daishouhuo-01'></i>待收货</li>
                <li @click='manage("tosh")'><i class='iconfont icon-bianji1'></i>售后</li>
                <li @click='manage("tomydd")'><i class='iconfont icon-wodedingdan'></i>我的订单</li>
            </ul>
            <ol>
                <li>账号余额</li>
                <li @click='addaddr'>地址管理</li>
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
                this.$router.push({
                    name:'exit'
                })
            },
            manage(type){
                this.$router.push({
                    name:'manage',
                    params:{
                        type:type
                    }
                })
            },
            addaddr(){
                this.$router.push({
                    name:'addaddr'
                })
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
        line-height:.5rem;
        font-size:.3rem;
    }
    .messige img{
        width:1rem;
        height:1rem;
        border-radius:50%;
        margin-top:.6rem;
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