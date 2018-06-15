<template>
    <div class='box'>
        <router-view class='home'></router-view>
        <div class='foots'>
            <ul>
                <li><router-link :to='{name:"home"}'><i class='icon iconfont icon-shouye'></i>首页</router-link></li>
                <li><router-link :to='{name:"fenlei"}'><i class='icon iconfont icon-gongzuo'></i>分类</router-link></li>
                <li><router-link :to='{name:"shejiao"}'><i class='icon iconfont icon-tongjitu111'></i>社交</router-link></li>
                <li><router-link :to='{name:"shop"}'><i class='icon iconfont icon-gouwuche'></i>购物车</router-link></li>
                <li><router-link :to='{name:"my"}'><i class='icon iconfont icon-wode'></i>我的</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"",
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    .box{
        width:100%;
        height:100%;
    }
    .home{
        flex:1;
    }
     ul{
         width:100%;
         display:flex;
         background:#fff;
         border-top:1px solid #ccc;
         z-index:999;
     }
     ul li{
         width:20%;
         text-align:center;
         display:flex;
         flex-direction: column;
         margin-top:.1rem;
     }
     ul li a{
         color:#000;
         font-size:.28rem;
         line-height:.4rem;
     }
     .icon{
         font-size:.36rem;
         display:block;
     }
</style>