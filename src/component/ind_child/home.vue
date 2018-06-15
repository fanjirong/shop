<template>
    <div class='boxs'>
        <heads></heads>
        <div class='middle' @scroll='onScroll' ref='middle'>
             <div class='swiper-container banner' ref='swiper'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../../static/images/1.png" alt=""></div>
                    <div class="swiper-slide"><img src="../../../static/images/2.png" alt=""></div>
                    <div class="swiper-slide"><img src="../../../static/images/3.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class='nav' ref="nav">
                <ul>
                    <li><i class='icon iconfont icon-tongjitu111'></i>家乡味道</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>进口食品</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>牛买乳品</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>茶果冲饮</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>休闲零食</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>米面粮油</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>调味调料</li>
                    <li><i class='icon iconfont icon-tongjitu111'></i>酒水饮料</li>
                </ul>
                <div class='bottom'>
                    <h1>商城动态</h1>
                    <div class='swiper-container' ref='swipers'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">绿色无公害，无污染，无添加，天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</div>
                            <div class="swiper-slide">绿色无公害，无污染，无添加，天然有机蔬菜源头吃的放心，确保蔬菜新鲜</div>
                            <div class="swiper-slide">绿色无公害，无污染，无添加，天然有机蔬菜源头吃的放心，健康第一，安全保证</div>
                            <div class="swiper-slide">绿色无公害健康第一，安全保证，确保蔬菜新鲜</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='wrap' ref='con'>
                <ol>
                    <li v-for='item in list'>
                        <Content :list='item'></Content>
                    </li>
                </ol>
                <p>{{msg}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import heads from './header'
    import Content from './content'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import 'swiper/dist/js/swiper.js'
    export default {
        name:"",
        data(){
            return {
                list:[],
                flag:true,
                page:1,
                msg:'正在为您加载更多数据...'
            }
        },
        components:{
            heads,
            Content
        },
        mounted(){
             new Swiper(this.$refs.swiper,{
                autoplay:true,
                speed:100,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            }),
            new Swiper(this.$refs.swipers,{
                direction: 'vertical',
                autoplay:true,
                loop:true
            }),
            this.$http(`/index/recommend.action?page=${this.page}`).then((res)=>{
               this.list = JSON.parse(JSON.parse(res).recommend).wareInfoList
            })
        },
        methods:{
            onScroll(){
                let winH = this.$refs.middle.offsetHeight;
                let domH = this.$refs.swiper.offsetHeight+this.$refs.con.offsetHeight+this.$refs.nav.offsetHeight;
                let scrollTop = this.$refs.middle.scrollTop;
                if(domH-winH-scrollTop<200&&this.flag){
                    this.flag=false;
                    this.page++;
                    this.$http(`/index/recommend.action?page=${this.page}`).then((res)=>{
                        if(res.code===1000){
                            this.msg='我是有底线的'
                        }else{
                            this.list = [...this.list,...JSON.parse(JSON.parse(res).recommend).wareInfoList]
                            this.flag=true
                        }
                    })
                }
             
            }
        }
    }
</script>
<style lang="">
    .boxs{
       display:flex;
       flex-direction: column;
    }
    .middle{
        flex:1;
        overflow-y:scroll;
    }
    .banner img{
        width:100%;
    }
    .nav{
        width:100%;
        background:#fff;
    }
    .nav ul{
        width:100%;
        display:flex;
        flex-wrap:wrap;
    }
    .nav ul li{
        width:25%;
        text-align:center;
        line-height:.6rem;
        margin-top:.25rem;
        font-size:.3rem;
    }
    .nav ul li i{
        width:.9rem;
        height:.9rem;
        border-radius:50%;
        background:orange;
        color:#fff;
        text-align:center;
        line-height:.9rem;
        display:block;
        margin-left:25%;
        font-size:.45rem;
    }
    .nav ul li:nth-child(2n) i{
        background:pink;
    }
    .nav ul li:nth-child(3n) i{
        background:skyblue;
    }
    .nav ul li:nth-child(4n) i{
        background:limegreen;
    }
    .nav .bottom{
        width:100%;
        height:1rem;
    }
    .nav .bottom h1{
        width:10%;
        margin-left:.1rem;
        color:orange;
        text-align:center;
        font-size:.3rem;
        line-height:.4rem;
        float:left;
    }
    .nav .bottom  .swiper-slide{
        width:100%;
        line-height:.35rem;
        padding:.1rem;
        font-size:.26rem;
    }
    .nav .swiper-container{
        width:85%;
        float:right;
        height:.8rem;
        border:1px solid #ccc;
        border-radius:.1rem;
        margin-right:.2rem;
    }
     .wrap{
        width:100%;
        background:#fff;
        margin-top:.2rem;
    }
    ol{
        display:flex;
        flex-wrap:wrap;
    }
    ol li{
        width:50%;
    }
    p{
        text-align:center;
        line-height:.4rem;
        font-size:.36rem;
    }
</style>