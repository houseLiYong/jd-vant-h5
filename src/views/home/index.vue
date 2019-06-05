<template>
    <div class="home">
      <Heador ref="profile"></Heador>
      <Hslider></Hslider>
      <Notice></Notice>
      <Borrow ></Borrow>
      <Money></Money>
      <Product></Product>
      <Life></Life>
      <Footer></Footer>
      <Navbar v-if="navabrItems.length" ref="navBar" :post-title="navbarTitle" :post-items="navabrItems"></Navbar>
    </div>
</template>
<script>
  import Heador from '../../components/public/header.vue'
  import Footer from '../../components/public/footer.vue'
  import Navbar from '../../components/public/navbar.vue'
  import Hslider from './hslider.vue'
  import Notice from './notice.vue'
  import Borrow from './borrow.vue'
  import Money from './money.vue'
  import Message from './manage.vue'
  import Product from './product.vue'
  import Life from './life.vue'
      export default {
        name: 'home',
        data() {
            return {
              msg:'',
              index:0,
              name:'home',
              title:'理财',
              navbarTitle:'导航条',
              navabrItems:[],
            }
        },
        provide:function () {
          return {

          }
        },
        components:{
          Heador,
          Footer,
          Navbar,
          Hslider,
          Notice,
          Borrow,
          Money,
          Product,
          Life
        },
        computed:{
          username(){
            return this.$route.path;
          },
        },
        methods: {
            init: function () {
              console.log(this.$route);
              console.log('profile',this.$refs);
              console.log('profile',this.$refs.profile)
            }
        },
        beforeCreate:function () {
          //在这里加个loading事件
          //在实例初始化之后，数据观测和event/watcher事件配置之前调用
          console.group('beforeCreate');
          console.log('beforeCreate 创建前状态');
          console.log('this',this);
          console.log('el',this.$el);   //undefined
          console.log('data',this.$data); //undefined
          console.log('name',this.name); //undefined
        },
        created:function () {
          //在这结束loading事件,初始化，实现函数自执行
          //在实例创建完成后被立即调用，实例完成数据观测，属性和方法的运算
          //watch/event事件回调。
          //挂载阶段还没开始，$el属性不可见
          console.group('create,实例创建完毕');
          console.log('el',this.$el);   //undefined
          console.log('data',this.$data); //已被初始化
          console.log('name',this.name); // 已被初始化
          //使用setTimeout()模拟ajax异步获取数据，传递给子组件使用

          this.navabrItems = [
              {
                path:'/home',
                title:'首页',
                icon:'icon-shouye',
              },{
                path:'/money',
                title:'赚钱',
                icon:'icon-zhuanqian',
              },{
                path:'/ious',
                title:'借钱',
                icon:'icon-jieqian'
              },{
                path:'/roise',
                title:'众筹',
                icon:'icon-shengqian'
              },{
                path:'/user/123',
                title:'金融会员',
                icon:'icon-wode'
              }
            ]

        },
        beforeMount:function () {
          //在挂载开始之前被调用：相关的render函数被调用。
          //子组件的还未挂载
          //该钩子在服务器端渲染期间不被调用
          console.group('beforeMount, 挂载前状态');
          console.log('el',this.$el);   //已被初始化
          console.log('data',this.$data); //已被初始化
          console.log('name',this.name); // 已被初始化
        },
        mounted: function () {
          //在这发起后端请求，拿回数据，配合路由钩子做一些事情
          //el被新创建的vm.$el替换，挂载到实例上去之后调用该钩子，
          //如果root实例挂载了一个文档内元素，当mounted别调用时vm.$el在文档内
          //mounted不会承诺所有的子组件都一起被挂载，如果希望等到这个视图
          //都渲染完毕，可以使用vm.$nextTick
          this.$nextTick(function(){
            this.init()
            console.group('mount, 挂载结束');
            console.log('el',this.$el);   //已被初始化
            console.log('data',this.$data); //已被初始化
            console.log('name',this.name); // 已被初始化
            console.log('底部组件navbar',this.$refs.navBar);

          })
        },
        beforeUpdate:function () {
          //数据更新时调用，发生在虚拟DOM打补丁之前。
          //适合在更新之前访问现有的DOM，比如手动移除已添加的事件的监听器
          console.group('beforeUpdate 更新前状态');
          console.log('el',this.$el);   //已被初始化
          console.log('data',this.$data); //已被初始化
          console.log('name',this.name); // 已被初始化
        },
        updated:function () {
          //由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子
          //当这个钩子被调用时，组件DOM已经更新，所以现在可以执行依赖于DOM的操作。
          //应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或watcher
          this.$nextTick(function () {
            console.group('updated 更新完毕');
            console.log('el',this.$el);   //已被初始化
            console.log('data',this.$data); //已被初始化
            console.log('name',this.name); // 已被初始化
          })
        },
        activated:function () {
          //keep-alive组件激活时调用
          console.group('activated');
        },
        deactivated:function () {
          //keep-alive组件停用时调用
          console.group('deactivated')
        },
        beforeDestory:function () {
          //确认删除xx吗？destroyed:当组件已被删除，请空相关内容
          //实例销毁之前调用，在这一步，实例仍然完全可用
          console.group('beforeDestory 销毁前状态')
          console.log('el',this.$el);   //已被初始化
          console.log('data',this.$data); //已被初始化
          console.log('name',this.name); // 已被初始化
        },
        destroryed:function () {
          //Vue实例销毁之后调用。调用后，Vue实例指示的所有事件监听器都被移除
          //子实例也会销毁
          console.group('destroyed 销毁完成状态')
          console.log('el',this.$el);   //已被初始化
          console.log('data',this.$data); //已被初始化
          console.log('name',this.name); // 已被初始化
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../../static/css/element";
    /*a{
      @include link-colors(#999, #999, #999);
    }*/
</style>
