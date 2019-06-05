<template>
    <div class="money">
      <Header></Header>
      <Mslider ></Mslider>
      <Ada></Ada>
      <Money></Money>
      <Adb></Adb>
      <Finance></Finance>
      <Adc></Adc>
      <Footer cname="mfooter"></Footer>
      <Navbar v-if="navabrItems.length" ref="navBar" :post-title="navbarTitle" :post-items="navabrItems" ></Navbar>
    </div>
</template>
<script>
  import Header from '../../components/public/header.vue'
  import Footer from '../../components/public/footer.vue'
  import Navbar from '../../components/public/navbar.vue'
  import Mslider from './mslider.vue'
  import Ada from './ada.vue'
  import Adb from './adb.vue'
  import Adc from './adc.vue'
  import Finance from './finance.vue'
  import Money from './money.vue'
    export default {
        components:{
          Header,
          Footer,
          Navbar,
          Mslider,
          Ada,
          Adb,
          Adc,
          Finance,
          Money
        },
        data() {
            return {
              navbarTitle:'导航条',
              navabrItems:[],
            }
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
        mounted: function () {
          this.init()
        },
        methods: {
            init: function () {

            }
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../../static/css/element";
</style>
