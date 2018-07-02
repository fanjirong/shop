import Vue from 'vue'
import axios from 'axios'
console.log(process.env.NODE_ENV)

//测试服务器t
const testurl = '192.168.43.8:3000'
const onlineurl = '192.168.43.8:3000' || 'http://m.jd.com'

let instance = axios.create({   //创建实例
    header:{
        "Content-Type":"application/json"
    },
    baseUR:testurl
    //baseURL:process.env.NODE_ENV==='production'?onlineurl:testurl
})

instance.interceptors.request.use((config)=>{  //添加一个请求拦截器
    //在请求发送之前做一些事
    return config;
},(err)=>{
    //请求不成功做一些事
    console.log(err)
})

instance.interceptors.response.use((response)=>{  //添加一个返回拦截器
    //对返回的数据做一些处理
    if(response.status === 200){
        return response.data
    }else{
        //对返回的错误警醒一些处理
        return response
    }
})

export default {
    install(Vue){
        //防止$http 在将来被覆盖
        Object.defineProperty(Vue.prototype,'$http',{  //Vue.prototype不是全局变量，而是原型属性
            value:instance
        })
    }
}


export {instance}




//  Object.defineProperty(obj, prop, descriptor) 直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回这个对象
// obj
// 要在其上定义属性的对象。
// prop
// 要定义或修改的属性的名称。
// descriptor
// 将被定义或修改的属性描述符。
// 返回值
//     被传递给函数的对象。