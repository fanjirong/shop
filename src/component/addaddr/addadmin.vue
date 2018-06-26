<template>
    <div>
        <header>
            收货人
        </header>
        <div>
            <input type="text" placeholder='收件人姓名' v-model='name'>
            <input type="text" placeholder='收件人手机号' v-model='phone'>
            <div class='select'>
                <multiselect
                v-model="province"
                :options="provinces" label='name' placeholder='请选择省份' @select='pro'>
                </multiselect>
                <multiselect
                v-model="city"
                :options="citys" placeholder='请选择城市' label='name' @select='cit'>
                </multiselect>
            </div>
            <multiselect
            v-model="county"
            :options="countys" placeholder='请选择地区'>
            </multiselect>
            <input type="text" placeholder='详细地址' v-model='address'>
            <button @click='submit'>保存</button>
        </div>
        <toast></toast>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css"
import axios from 'axios'
import {getCookie} from '../.././component/until/util'
  export default {
    components: { Multiselect },
    data () {
      return {
        name:'',
        phone:'',
        province:'',
        city:'',
        county:'',
        provinces: [],
        citys:[],
        countys:[],
        address:''
      }
    },
    mounted(){
        axios.get('../../../static/server/city/city.json').then((res)=>{
            this.provinces = res.data;
        })
    },
    methods:{
        pro(a,b){
            this.citys = a.city;
            this.city ='';
            this.county='';
        },
        cit(a){
            this.countys = a.area
        },
        submit(){
            console.log(this.city)
            let data={
                name:this.name,
                phone:this.phone,
                province:this.province.name,
                city:this.city.name,
                county:this.county,
                address:this.address
            }
            if(!this.name || !this.phone || !this.province || !this.city || !this.county || !this.address){
                this.$toastBus.$emit('toast','请补全信息')
                return 
            }
            let pho = /^1[3578]\d{9}$/;
            if(!pho.test(this.phone)){
                this.$toastBus.$emit('toast','请输入正确格式的手机号')
                return
            }
            

            this.$http.post('/api/getcity',{
                token:getCookie('token'),
                data
            }).then(res=>{
                console.log(res)
                if(res.code == 0){
                    this.$toastBus.$emit('toast',res.msg)
                    setTimeout(()=>{
                        this.$router.push({
                            name:'login',
                            query:{
                                from:'addadmin'
                            }
                        })
                    },3000)
                }
                if(res.code == 1){
                    this.$toastBus.$emit('toast',res.msg)
                    setTimeout(()=>{
                        this.$router.push({
                            name:'addaddr'
                        })
                    },2000)
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
    input{
        width:90%;
        margin-left:5%;
        height:.8rem;
        margin-top:.3rem;
        border:0;
        border-radius:.2rem;
        padding-left:.2rem;
    }
    .select .multiselect{
        width:42%;
        display:inline-block;
        margin-lefT:5%;
        margin-top:.3rem;
        margin-bottom:.3rem;
    }
    .multiselect{
        width:90%;
        margin-left:5%;
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