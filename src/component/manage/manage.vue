<template>
    <div class='wrap'>
        <header> 
            <a href="#" onclick="javascript:history.back(-1);"><</a>
            <b>订单管理</b>
            <a href=""></a>
        </header>
        <ul>
            <li><router-link :to="{name:'all'}">全部</router-link></li>
            <li><router-link :to="{name:'alls'}">代付款</router-link></li>
            <li><router-link :to="{name:'all'}">代发货</router-link></li>
            <li><router-link :to="{name:'all'}">待收货</router-link></li>
            <li><router-link :to="{name:'all'}">待评价</router-link></li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        all(){
            alert(11)
        }
    }
}
</script>
<style scoped>
    .wrap{
        width:100%;
        position:absolute;
        top:0;
        bottom:0;
        background:#eee;
    }
    header{
        width:100%;
        height:.8rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .1rem;
        font-size:.3rem;
        background:#fff;
        border-bottom:1px solid #ccc;
    }
    header b{
        font-size:.3rem;
        font-weight:bold;
    }
    ul{
        width:100%;
        height:.8rem;
        display:flex;
        background:#fff;
    }
    ul li{
        width:20%;
        text-align:center;
        line-height:.8rem;
        font-size:.28rem;
    }
    .router-link-active{
        color:red
    }
</style>