<template>
    <div class='wrap'>
        <header>
            <a href="#"><</a>
            <a href="#"<input type='text' @click='toSearch'/> </a>
            <a href="#">...</a>
        </header>
        <div class='sec'>
            <ul>
                <li @click='getData("17951827")' :class='num==17951827?"active":""'>热门分类</li>
                <li @click='getData("17951828")' :class='num==17951828?"active":""'>手机数码</li>
                <li @click='getData("17951829")' :class='num==17951829?"active":""'>电脑办公</li>
                <li @click='getData("17951830")' :class='num==17951830?"active":""'>电视影音</li>
                <li @click='getData("17951831")' :class='num==17951831?"active":""'>空调冰洗</li>
                <li @click='getData("17951831")' :class='num==17951832?"active":""'>厨房卫浴</li>
                <li @click='getData("17951831")' :class='num==17951833?"active":""'>生活电器</li>
                <li @click='getData("17951831")' :class='num==17951834?"active":""'>食品酒水</li>
                <li @click='getData("17951831")' :class='num==17951835?"active":""'>美妆个户</li>
                <li @click='getData("17951831")' :class='num==17951836?"active":""'>母婴玩具</li>
                <li @click='getData("17951831")' :class='num==17951837?"active":""'>医疗保健</li>
                <li @click='getData("17951831")' :class='num==17951838?"active":""'>服饰鞋帽</li>
                <li @click='getData("17951831")' :class='num==17951839?"active":""'>运动户外</li>
            </ul>
            <div class='right'>
                <div  v-for='i in this.$store.state.list'>   
                    <p>{{i.goodsTypeName}}</p>
                    <div  class='right_box'>
                        <dl v-for='item in i.goodsTypeList'>
                            <dt><img :src="item.goodsTypeImgUrl" alt=""></dt>
                            <dd>{{item.goodsTypeName}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                num:'17951827'
            }
        },
        computed:{
            list(){
                return this.$store.state.list[this.num]
            }
        },
        mounted(){
           this.getData("17951827")
        },
        methods:{
            getData(cid){
                this.num = cid;
                // this.$http(`/index.php??ctl=goods_class&act=ajaxGetClassList&cid=${cid}`).then((res)=>{
                //     this.list = res.secondLevelCategories
                // })
                this.$store.dispatch('fetchData',cid)
            },
            toSearch(){
                this.$router.push('/search')
            }
        }
    }
</script>
<style scoped>
.wrap{
    background:#fff;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
}
    header{
        width:100%;
        height:.8rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .15rem;
    }
    header input{
        border:0;
        background:#eee;
        width:80%;
        height:.5rem;
        border-radius:.1rem;
    }
    .sec{
        flex:1;
        overflow-y:scroll;
    }
    .sec ul{
        width:20%;
        height:100%;
        overflow-y:scroll;
        background:#ccc;
        float:left;
    }
    .sec ul li{
        width:100%;
        line-height:1rem;
        border-top:1px solid #ccc;
        text-align:center;
        font-size:.3rem;
    }
    .right{
        float:right;
        width:80%;
        height:100%;
        overflow-y:scroll;
    }
    .right p{
        margin-left:.2rem;
        line-height:.8rem;
    }
    .right_box{
        display:flex;
        flex-wrap:wrap;
    }
    dl{
        width:28%;
        margin-left:.2rem;
        margin-top:.2rem;
        background:#eee;
    }
    dl dt{
        width:100%;
    }
    dl dt img{
        width:80%;
        margin-left:10%;
    }
    dl dd{
        text-align:center;
        line-height:.8rem;
    }
    .active{
        border-left:2px solid red;
        background:#fff;
    }

</style>