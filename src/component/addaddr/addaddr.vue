<template>
    <div>
        <header>
            收货地址
        </header>
        <div class='div'>
            您还没有添加收货地址哦~~~
        </div>
        <button @click='addadmin'>点击添加</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            addadmin(){
                this.$router.push({
                    name:'addadmin'
                })
            }
        }
    }
</script>
<style scoped>
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
    .div{
        width:100%;
        text-align:center;
        line-height:3rem;
        font-size:.4rem;
        background:#fff;
        margin-top:.2rem;
    }
    button{
        width:70%;
        margin-lefT:15%;
        height:.8rem;
        margin-top:1rem;
        border:0;
        background:red;
        border-radius:.2rem;
        color:#fff;
        font-size:.3rem;
    }
</style>