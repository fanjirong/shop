<template>
    <div class='box'>
        <input @input='search' type="text" v-model='keywords'>
        <ul v-html='html'></ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                keywords:'',
                html:''
            }
        },
        methods:{
            search(){
                this.$http(`https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${this.keywords}&dotime=1528960286000`).then((res)=>{
                    console.log(res)
                    this.html=res;
                })
                
            }
        }
    }
</script>
<style scoped>
    .box{
        width:100%;
        height:100%;
        background:#fff;
    }
    input{
        width:70%;
        margin-top:.5rem;
        margin-lefT:15%;
        background:#eee;
        border:0;
        height:.6rem;
        border-radius:.2rem;
    }
    ul{
        width:70%;
        margin-left:15%;
    }
    
</style>