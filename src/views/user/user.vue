<template>
    <div class="hello">
      <p>user{{id}}</p>
      <p> 获取查询的id {{ $route.params.id }}</p>
      <div>
        <p>
          父组件
        </p>
        <p>
          <router-link :to="{ name:'profile' }">profile</router-link>
          <router-link :to="{ name:'post' }">post</router-link>
        </p>
        <router-view></router-view>
      </div>
      <p>
        <user1></user1>
      </p>
      <div class="post">
        <div class="loading" v-if="loading">
          loading...
        </div>
      </div>
      <div class="error" v-if="error">
        {{ error }}
      </div>
      <div class="content" v-if="post">
        post数据源
      </div>
    </div>
</template>
<script>
  import Navbar from '../../components/public/navbar.vue'
  import user1 from '@/components/user1'
    export default {
        name: 'user',
        data() {
            return {
              tar:{},
              id:0,
              loading:false,
              post:null,
              error:null,
            }
        },
        components:{
          user1
        },
        created(){
          //组件创建完成后，获取数据，
          //此时data已经被observed 了
          //使用setTimeout()模拟ajax异步获取数据，传递给子组件使用
          this.fetchData()
        },
        watch:{
          '$route':'fetchData'
        },
        methods: {
            fetchData:function () {
              this.error = this.post = null;
              this.loading = true;
              console.log('3333333333333');
            },
            init: function () {
              console.log(this.$route);
              this.id = this.$route.params.id;
            }
        },
        mounted: function () {
            this.init()
        },
        watch:{
          '$route'(to, from){
            //对路由变化做出响应
            this.id = this.$route.params.id;
            console.log('to',to);
            console.log('from',from);
          }
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../../static/css/element";

</style>
