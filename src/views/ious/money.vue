<template>
    <Panel :class="$style.panel"  :title="title">
      <section :class="$style.list">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/16662/30/15341/22141/5caf3007Ed04371f5/92aeb35325e56d32.png?width=375&height=233" alt="">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/21337/31/13706/22340/5ca18608Ebdd6ea02/02d3b385bf9c045c.png?width=375&height=233" alt="">
      </section>
      <section :class="$style.listes">
          <router-link v-for="item in items" :key="item.src" :to="item.path">
            <img :src="item.src" alt="">
            <p>{{ item.txt }}</p>
          </router-link>
      </section>
    </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
    export default {
        components:{
          Panel
        },
        data() {
            return {
              title:'有车有钱',
              items:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90',
                txt:'机票',
                path:'/home',
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88',
                txt:'租房',
                path:'/home'
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90',
                txt:'房抵送',
                path:"/home"
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88',
                txt:'分期用',
                path:'/home'
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90',
                txt:'彩票推荐',
                path:'/home'
              }]
            }
        },
        methods: {
            init: function () {

            }
        },
        mounted: function () {
            this.init()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../../static/css/element";
    .panel{
      @include panel();
      background: #f4f5f8;
      padding-top: 20px;
      h4{
        box-sizing: border-box;
        margin: 0 15px 10px 15px;
        padding-left: 10px;
        height: 22px;
        line-height: 22px;
        text-align: left;
        font-weight: 500;
        font-size: 16px;
        color:#000000;
        position: relative;
        &:before{
          content: " ";
          width: 2px;
          height: 18px;
          background: url("https://m.jr.jd.com/vip/borrowMoney/css/i/title.png") 0 0 no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          margin-right: 5px;
          position: absolute;
          top: 2px;
          left: 0px;
        }
      }
      .list{
        @include flex(row);
        height: 100px;
        box-sizing: border-box;
        margin-bottom: 20px;
        img{
          width: 50%;
        }
      }
      .listes{
        @include flex(row);
        box-sizing: border-box;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
        background: linear-gradient(#f5f5f9, #ffffff);
        padding-bottom: 20px;
        a{
          text-align: center;
          width: 20%;
          color: #333333;
          img{
            width: 40px;
            height: 40px;
            display: inline-block;
          }
          p{
            font-size: 12px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
</style>
