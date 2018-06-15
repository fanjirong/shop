import Vue from 'vue'
import axios from 'axios'

let instance = axios.create({
    header:{
       // "Accept-Content":"application/json"
    },
    baseURL:'http://localhost:3000'
})

instance.interceptors.request.use((config)=>{
    return config;
},(err)=>{
    console.log(err)
})

instance.interceptors.response.use((response)=>{
    if(response.status === 200){
        return response.data
    }else{
        return response
    }
})

export default {
    install(Vue){
        //防止$http 在将来被覆盖
        Object.defineProperty(Vue.prototype,'$http',{
            value:instance
        })
    }
}
export {instance}




//  Object.defineProperty(obj, prop, descriptor)
// obj
// 要在其上定义属性的对象。
// prop
// 要定义或修改的属性的名称。
// descriptor
// 将被定义或修改的属性描述符。
// 返回值
//     被传递给函数的对象。