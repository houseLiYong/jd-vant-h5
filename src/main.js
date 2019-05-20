// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import font from './font'
router.beforeEach((to,from,next)=>{
  console.log('to11111',to);
  console.log('from1',from);
  if(to.matched.some(record=>record.meta.requiresAuth)){
    //this route requires auth, check if logged in
    //if not , redirect to login page
    //全局判断是否已经登录
    if(true){
      next()
    }else {
      next({
        path:"/"
      })
    }
  }else {
    next()

  }
})
Vue.config.productionTip = false;
Vue.config.devtools = true;

var  Profile = Vue.extend({
  template:'<p>{{ firstName }}</p>',
  data:function () {
    return{
      firstName:'li'
    }
  }
})
new Profile().$mount('#mount-point')

/*过滤器*/
Vue.filter('capitalize',function (value) {
  if(!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

/*注册全局组件*/
Vue.component('my-component',{
  data:function () {
    return {
      count:0
    }
  },
  template:'<button v-on:click="count++">you click me {{ count }} times</button>'
})

/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  font,
  components: { App },
  template: '<App/>'
})
