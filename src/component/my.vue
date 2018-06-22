<template>
    <div class='box'>
        <header>
            <a href="#"><i class='icon iconfont icon-set'></i></a>    
            <b>我的717商城</b>
            <a href=""><i class='icon iconfont icon-xiaoxi'></i></a>
        </header>
        <section>
            <div class='messige'></div>
            <div class='myshop'>
                <h1>我的店铺</h1>
            </div>
            <ul>
                <li>待付款</li>
                <li>待发货</li>
                <li>待收货</li>
                <li>售后</li>
            </ul>
        </section>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .box{
        width:100%;
        flex:1;
        background:#fff;
        display:flex;
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
        height:3rem;
        background:orange;
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
</style>