/*
*
* 功能：提示横条，可以自动隐藏
* @param  msg string/component/node
*
*
 */

import Toasts from './toats'
let Toast = {
    install(Vue,options){
        const toastBus = new Vue({})
        Object.defineProperty(Vue.prototype,"$toastBus",{
            value:toastBus
        })
        let mixin = [  //创建混入对象
            {
                created(){
                   
                }
            }
        ]
        Toasts.mixins =  mixin

        //全局组件
        Vue.component('Toast',{
            template:` <div class='toast'>
                        <Toasts v-for='(i,index) in msg' :key='index'>{{i}}</Toasts>
                    </div>`  ,
            data(){
                return {
                    msg:[],
                    timeout:options.timeout
                }
            } ,
            components:{
                Toasts
            },
            methods:{
                active(msg,options){
                    if(options){
                        this.timeout = open.timeout;
                    }
                    this.msg.push(msg)
                }
            },
            mounted(){
                toastBus.$on('toast',(msg)=>{
                    this.active(msg)
                })
            }
        })
    }
}
export default Toast


//Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

// obj
// 要在其上定义属性的对象。
// prop
// 要定义或修改的属性的名称。
// descriptor
// 将被定义或修改的属性描述符