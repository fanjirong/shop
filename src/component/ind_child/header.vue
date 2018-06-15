<template>
    <div>
        <header>
            <b>717</b>
            <a href="#"><input @click='toSearch' type='text' placeholder='  请输入您想要购买的商品'/> </a>
            <a href=""><span>我的店铺</span><span>消息</span></a>
        </header>
    </div>
</template>
<script>
    export default {
        methods:{
            toSearch(){
                this.$router.push('/search')
            }
        }
    }
</script>
<style lang="">
    header{
        width:100%;
        height:.9rem;
        display:flex;
        text-align:center;
        line-height:.9rem;
        background:#fff;
    }
     header b{
         flex:1;
         font-size:.4rem;
         color:orange;
         font-weight:bold;
     }
     header a input{
         border:0;
         background:#eee;
         width:90%;
         height:.58rem;
         margin:0 .1rem;
         border-radius:.2rem;
     }
     header a:nth-child(2){
         flex:5;
     }
     header a span{
         font-size:.3rem;
     }
</style>