import Vue from 'vue'
import Router from 'vue-router'
import Index from '../component/index'
import Home from '../component/ind_child/home'
import Search from '../component/search'
import Fenlei from '../component/fenlei'
import Shejiao from '../component/shejiao'
import Shop from '../component/shop'
import My from '../component/my'
import Detail from '../component/Detail/detail'
import Login from '../component/login/login'
import Register from '../component/register/register'
import {getCookie} from '../component/until/util'
import Manage from '../component/manage/manage'
import All from '../component/manage/all'
import Alls from '../component/manage/alls'
import Exit from '../component/exit/exit'
import Addaddr from '../component/addaddr/addaddr'
import Addadmin from '../component/addaddr/addadmin'


Vue.use(Router)

let router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/index/home'
        },
        {
            path:'/index',
            name:'index',
            component:Index,
            children:[
                {
                    path:'home',
                    name:'home',
                    component:Home,
                },
                {
                    path:'fenlei',
                    name:'fenlei',
                    component:Fenlei
                },
                {
                    path:'shejiao',
                    name:'shejiao',
                    component:Shejiao
                },
                {
                    path:'shop',
                    name:'shop',
                    component:Shop
                },
                {
                    path:'/my',
                    name:'my',
                    component:My
                }
            ]
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/detail',
            name:'detail',
            component:Detail
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/manage',
            name:'manage',
            component:Manage,
            children:[
                {
                    path:'all',
                    name:'all',
                    component:All
                },
                {
                    path:'alls',
                    name:'alls',
                    component:Alls
                }
            ]
        },
        {
            path:'/exit',
            name:'exit',
            component:Exit
        },
        {
            path:'/addaddr',
            name:'addaddr',
            component:Addaddr
        },
        {
            path:'/addadmin',
            name:'addadmin',
            component:Addadmin
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.name=='my' || to.name=='shop'){
        let tooken = getCookie('token')
        if(!tooken){
            next({name:'login',query:{from:to.name}})
        }else{
            next()
        }
    }else{
        next()  
    }
})



export default router