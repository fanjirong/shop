import Vue from 'vue'
import Vuex from 'vuex'
import {instance} from '../until/http'
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        upData(state,payload){
            let o = [...state.list]
            o = payload;
            state.list = o;
        }
    },
    actions:{
        fetchData({state,commit},cid){
            if(!state.list[cid]){
                 instance.get(`/index.php??ctl=goods_class&act=ajaxGetClassList&cid=${cid}`).then((res)=>{
                    commit('upData',res.secondLevelCategories)
                })
            }
        }
    },
    getters:{},
    modules:{}
})

store.subscribe(()=>{  //调用此方法返回的函数即可停止订阅
    console.log(store.state.list)
})

export default store