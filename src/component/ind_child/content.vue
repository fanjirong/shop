<template>
    <div>
        <dl @click='toDetail'>
            <dt><img v-lazy="list.imageurl" alt=""></dt>
            <dd>
                <h1>{{list.wname}}</h1>
                <h2>{{list.jdPrice}}</h2>
                <h3><i class='icon iconfont icon-gouwuche' @click.stop='addshop'></i></h3>
            </dd>
        </dl>
    </div>
</template>
<script>
import {getCookie} from '../until/util'
    export default {
        props:{
            list:{
                type:Object
            },
            instance:{

            }
        },
        methods:{
            toDetail(){
                this.$router.push({
                    name:'detail',
                    query:{
                        url:encodeURIComponent(this.list.clickUrl)
                    }
                })
            },
            addshop(){
                this.$http.post('/api/addshop',{
                    token:getCookie('token'),
                    list:this.list
                }).then((res)=>{
                    if(res.code==0){
                        this.$router.push({
                            name:'login'
                        })
                    }else{
                        //this.instance.active('添加成功')
                        this.$toastBus.$emit('toast','添加成了')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    dl{
        width:100%;
        position:relative;
        border-bottom:1px solid #ccc;
        margin-top:.1rem;
    }
    dl dt{
        text-align:center;
        width:100%;
    }
    dl dt img{
        width:50%;
        height:auto;
        margin:.2rem;
    }
    dl dd{
        margin-left:.1rem;
    }
    dl dd h1{
        font-size:.35rem;
        line-height:.4rem;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    dl dd h2{
        font-size:.3rem;
        color:red;
        line-height:.5rem;
        margin-bottom:.2rem;
    }
    dl dd h3{
        position:absolute;
        right:.2rem;
        bottom:.2rem;
    }
    dl dd h3 .icon{
        font-size:.3rem;
    }
</style>