<template>
  <div id="app">
    <!--<div>
      <p>声明式</p>
      <router-link to="/foo">foo</router-link>
      <router-link to="/bar">bar</router-link>
      <router-link :to="{ name:'home' }">home</router-link>
      <router-link :to="{ name:'user', params:{ id:123 } }">user123</router-link>
      <router-link :to="{ name:'user', params:{ id:456 } }">user456</router-link>
    </div>
    <div>
      <p>编程式</p>
      <span @click="foo">foo</span>
      <span @click="bar">bar</span>
      <span @click="home">home</span>
      <span @click="users(123)">user123</span>
      <span @click="users(456)">user456</span>
    </div>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods: {
    foo:function () {
      console.log('foo');
      return this.$router.push('foo')
    },
    bar:function () {
      console.log('bar');
      return this.$router.push('bar');
    },
    home:function () {
      console.log('home')
      return this.$router.push('home')
    },
    users:function (obj) {
      console.log('users')
      const  userID = obj;
      return this.$router.push({ path:`/user/${userID}`},function () {
        console.log('导航完成');
      },function () {
        console.log('导航终止');
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
