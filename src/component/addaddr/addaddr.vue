<template>
    <div>
        <header>
            收货地址
        </header>
        <div class='div' v-show='list.length==0'>
            您还没有添加收货地址哦~~~
        </div>
        <div v-for='(i,index) in list' class='add'>
            <h1>{{i.name}} {{i.phone}}</h1>
            <h2>{{i.province}} {{i.city}} {{i.county}} {{i.address}}</h2>
            <h3><input type="checkbox">默认   <button @click='exit(index)'>删除</button><button @click='bj(i)'>编辑</button></h3>
        </div>
        <button class='button' @click='addadmin'>点击添加</button>
        <toast></toast>
    </div>
</template>
<script>
import {getCookie} from '../../component/until/util'
import Vue from 'vue'
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.$http.post('/api/addcity',{
                token:getCookie('token')
            }).then(res=>{
                this.list = res.data
            })
        },
        methods:{
            addadmin(){
                this.$router.push({
                    name:'addadmin',
                    query:{
                        type:'add'
                    }
                })
            },
            exit(index){
                this.$http.post('/api/delcity',{
                    token:getCookie('token'),
                    ind:index
                }).then((res)=>{
                    if(res.code==0){
                        this.$router.push({
                            name:'login'
                        })
                    }else{
                        this.$http.post('/api/addcity',{
                            token:getCookie('token')
                        }).then(res=>{
                            this.list = res.data
                        })
                        this.$toastBus.$emit('toast',res.msg)
                    }
                })
            },
            bj(list){
                this.$router.push({
                    name:'addadmin',
                    query:{
                        type:'bj',
                        name:list.name,
                        phone:list.phone,
                        province:encodeURI(list.province),
                        city:list.city,
                        county:list.county,
                        address:list.address
                    }
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
    .button{
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
    .add{
        width:100%;
        background:#fff;
        margin-top:.2rem;
    }
    .add h1,
    .add h2,
    .add h3{
        font-size:.34rem;
        line-height:.8rem;
        margin-lefT:.2rem;
    }
    .add h3 button{
        float:right;
        margin-right:.2rem;
        margin-top:.1rem;
        padding:.1rem;
    }
</style>