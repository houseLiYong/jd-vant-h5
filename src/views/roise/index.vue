<template>
    <div class="roise">
      <Heador></Heador>
      <Rslider></Rslider>
      <Daily></Daily>
      <In></In>
      <Footer></Footer>
      <Navbar v-if="navabrItems.length" :post-title="navbarTitle" :post-items="navabrItems"></Navbar>
    </div>
</template>
<script>
  import Heador from '../../components/public/header.vue'
  import Footer from '../../components/public/footer.vue'
  import Navbar from '../../components/public/navbar.vue'
  import Rslider from './rslider.vue'
  import Daily from './daily.vue'
  import In from './in.vue'
    export default {
        components:{
          Heador,
          Footer,
          Navbar,
          Rslider,
          Daily,
          In
        },
        data() {
            return {
              navbarTitle:'导航条',
              navabrItems:[],
            }
        },
        created:function () {
          //在这结束loading事件，初始化，实现函数自执行
          //在实例创建完成后被立即调用，实例完成数据观测，属性和方法的运算
          //watch/event事件回调
          //挂载阶段还没开始，$el属性不可见
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
