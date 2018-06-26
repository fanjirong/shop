<template>
    <div class='box'>
        <header>
            <h1>购物车</h1>
            <span @click='bianji'>{{type}}</span>
        </header>
        <section>
            <aside>
                <div v-show='data.length==0'>您的购物车啥也没有</div>
                <shopitem v-for='(data,index) in data' :datas='data' v-on:updata='fetchlist' :key='index'></shopitem>
            </aside>
            <div class='bottom'>
                <span :class="flag?'iconfont icon-xuanzhong-01':'iconfont icon-weixuanzhong-01'" @click='checkall'></span>  全选/反选
                总计：{{sums}}
                <button @click='next'>{{types}}</button>
            </div>
        </section>
    </div>
</template>
<script>
import {getCookie,bus} from './until/util'
import shopitem from './shopitem'
export default {
    data(){
        return {
            data:[],
            list:{},
            sums:0,
            flag:false,
            type:'编辑',
            types:'结算'
        }
    },
    created(){
        this.fetchlist()
        
    },
    mounted(){
        bus.$on('goodschecked',(data)=>{
            this.list[data.name] = data.pri;
            //console.log(this.list[data.name])
            this.sumup()
        })
    },
    methods:{
        sumup(){
             this.sums = Object.values(this.list).reduce((init,item)=>{
                return init+item
            },0)
        },
        bianji(){
            if(this.type == '编辑'){
                this.types = '删除',
                this.type = '完成'
            }else{
                this.types = '结算',
                this.type = '编辑'
            }
        },
        checkall(){
            this.flag=!this.flag
            bus.$emit('checkAll',this.flag)
        },
        next(){
            if(this.types=='结算'){
                //跳到支付页
            }else{
                if(confirm('您确定要删除吗?')){
                    let arr = [];
                    for(let i in this.list){
                        if(this.list[i]!=0){
                            arr.push(i)
                        }
                    }
                    console.log(arr)
                    this.$http.post('/api/shop/del',{
                        token:getCookie('token'),
                        name:arr
                    }).then((res)=>{
                        console.log(res)
                    })
                }
            }
        },
        fetchlist(){
            this.$http.post('/api/goodslist',{
                token:getCookie('token')
            }).then((res)=>{
                if(res.code==0){
                    if((confirm('登录超时，请重新登录'))){
                        this.$router.push({
                            name:'login',
                            query:{
                                from:'shop'
                            }
                        })
                    }
                }else{
                    this.data=res.data;
                }
            })
        }
    },
    components:{
        shopitem
    }
}
</script>
<style scoped>
    .box{
       position:relative;
       background:#fff;
       flex:1;
       display:flex;
    }
    header{
        width:100%;
        height:.8rem;
        line-height:.8rem;
        background:#eee;
        text-align:center;
        position:relative;
    }
    section{
        width:100%;
        flex:1;
        display:flex;
        flex-direction: column;
    }
    aside{
        flex:1;
        overflow-y:scroll;
    }
    h1{
        font-size:.3rem;
        display:inline-block;
    }
    header span{
        position:absolute;
        right:2rem;
    }
    .bottom{
        width:100%;
        height:1rem;
        background:orange;
        line-height:1rem;
        font-size:.3rem;
        color:#fff;
    }
    .bottom span{
        margin-lefT:.2rem;
        color:#000;
    }
    button{
        background:red;
        width:2rem;
        height:1rem;
        border:0;
        color:#fff;
        font-size:.28rem;
        position:absolute;
        right:0;
    }
    .icon-xuanzhong-01,
    .icon-weixuanzhong-01{
        font-size:.5rem;
    }
    .icon-xuanzhong-01{
        color:red;
    }
</style>