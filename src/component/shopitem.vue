<template>
    <div>
        <dl>
            <span :class="flag?'iconfont icon-xuanzhong-01':'iconfont icon-weixuanzhong-01'" @click='flag=!flag'></span>
            <dt><img :src='datas.imageurl' alt=""></dt>
            <dd>
                <h1>{{datas.wname}}</h1>
                <h2>{{datas.jdPrice}}</h2>
                <div class='com'>
                    <span @click='minus()'>-</span>
                    <span>{{datas.count}}</span>
                    <span @click='plus()'>+</span>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
import {getCookie,bus} from './until/util'
    export default {
        props:{
            required:true,
            datas:Object
        },
        data(){
            return {
                flag:false
            }
        },
        watch:{
            flag(n,o){
                bus.$emit('goodschecked',{name:this.datas.wname,pri:n?this.datas.count*this.datas.jdPrice:0})
            },
            datas(n,o){
                 bus.$emit('goodschecked',{name:this.datas.wname,pri:this.flag?this.datas.count*this.datas.jdPrice:0}) 
            }
            
        },
        mounted(){
            bus.$on('checkAll',(checkall)=>{
                if(checkall){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            })
        },
        methods:{
            minus(){
                // if(datas.count<=1) return 
                // datas.count--;
                
                let count = this.datas.count;
                if(count-1<1) return 
                this.$http.post('/api/shop/count',{
                    token:getCookie('token'),
                    count:count-1,
                    name:this.datas.wname
                }).then(res=>{
                    if(res.code==1){
                        this.$emit('updata')
                    }
                })
            },
            plus(){
                // if(i.count>=10) return 
                // i.count++;
                let count = this.datas.count;
                if(count+1>10) return 
                this.$http.post('/api/shop/count',{
                    token:getCookie('token'),
                    count:count+1,
                    name:this.datas.wname
                }).then(res=>{
                    if(res.code==1){
                        this.$emit('updata')
                     }
                })
            }
        }
    }
</script>
<style scoped>
dl{
    width:100%;
    display:flex;
    position:relative;
}
dl dt{
    width:3rem;
    height:3rem;
}
img{
    width:2.4rem;
    height:2.4rem;
    margin:.3rem;
}
h1{
    margin-top:.2rem;
    line-height:.4rem;
    font-size:.3rem;
}
h2{
    color:red;
    margin-top:.3rem;
    font-size:.3rem;
}
.com{
    position:absolute;
    right:.4rem;
    bottom:.6rem;
}
.com span{
    border:1px solid #ccc;
    padding:.15rem;
}
.com span:nth-child(2){
    border:0;
}
span {
    margin-top:1.3rem;
    margin-left:.2rem;
}
</style>