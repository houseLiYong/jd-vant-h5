
const Foo = { template:'<div>foo</div>' }
const Bar = { template:'<div>Bar</div>' }
const Router = require('vue-router')


import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
const routes = [
  { path:'/',redirect:'/home' },
  { path:'/foo',component:Foo, },
  { path:'/bar', component:Bar,  },
  { path:'/roise',component:(resolve)=>require(['@/views/roise/index'],resolve) },
  { path:'/ious',component:(resolve)=>require(['@/views/ious/index'],resolve) },
  { path:'/money',name:'money',component:(resolve)=>require(['@/views/money/index'],resolve) },
  { path:'/home',name:'home',component:(resolve)=> require(['@/views/home/index'], resolve)  },
  {
    path:'/user/:id',
    name:'user',
    component:(resolve)=>require(['@/views/user/user'], resolve),
    children:[
      {
        //当/user/:id/profile匹配成功，
        //UserProfile会被渲染再User的router-view中
        path:'profile',
        name:'profile',
        component:(resolve)=>require(['@/views/user/profile'],resolve),
        meta:{ requiresAuth: true }
      },
      {
        //当/user/:id/posts匹配成功
        //UserPost 会被渲染再User的 router-views中
        path:'post',
        name:'post',
        component:(resolve)=>require(['@/views/user/post'],resolve),
        meta:{ requiresAuth:true }
      }
    ]
  }
]
export default new Router({
  mode:'history',
  routes: routes
})
