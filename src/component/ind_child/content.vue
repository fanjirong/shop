<template>
    <dl @click='toDetail'>
        <dt><img v-lazy="list.imageurl" alt=""></dt>
        <dd>
            <h1>{{list.wname}}</h1>
            <h2>{{list.jdPrice}}</h2>
            <h3><i class='icon iconfont icon-gouwuche'></i></h3>
        </dd>
    </dl>
</template>
<script>
    export default {
        props:{
            list:{
                type:Object
            }
        },
        methods:{
            toDetail(){
                console.log(this.list)
                this.$router.push({
                    name:'detail',
                    query:{
                        url:encodeURIComponent(this.list.clickUrl)
                    }
                })
            }
        }
    }
</script>
<style lang="">
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
        right:.2rem;bottom:.2rem;
    }
</style>