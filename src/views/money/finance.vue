<template>
  <Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">
        查看更多理财
      </div>
      <div :class="$style.item" v-for="item in items" :key="item.src">
        <img :src="item.src" alt="">
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{item.text}}{{item.rate}}</p>
        </div>
        <em>
          <router-link :to="item.url">
            去赚钱 >
          </router-link>
        </em>
      </div>
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
              title:'理财精选',
              items:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
                title:'月度理财',
                text:'预期年化收益率',
                rate:'4.50%',
                url:'/home',
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
                title:'小金保',
                text:'近一年历史年化',
                rate:'5.60%',
                url:'/home',
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
                title:'活期盈',
                text:'近七日年化',
                rate:'3.55%',
                url:'/home',
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
      &>h4{
        text-align: left;
        margin-left: 15px;
        font-weight: 700;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        border-bottom: 1px solid #eee;
      }
      .content{
        @include flex;
        position: relative;
        .arrow{
          position: absolute;
          top: -42px;
          right: 15px;
          font-size: 12px;
          color: #999;
          &:after{
            content: " > ";
            display: inline-block;
          }
        }
        .item{
          @include flex(row);
          align-items: center;
          height: 70px;
          font-size: 0px;
          &:after{
            content: " ";
            box-sizing: border-box;
            height: 0;
            width: 100%;
            border-bottom:1px solid #ddd;
            margin-left: 68px;
          }
          &:last-child:after{
              border-bottom: none;
          }
          >img{
            width: 36px;
            height: 36px;
            display: inline-block;
            margin: 0 16px;
          }
          >div{
            font-size: 16px;
            color: #333;
            line-height: 1.8;
            width: 172px;
            p{
              color: #ff3232;
              font-size: 12px;
              line-height: 1.1;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          >em{
            color: #ff801a;
            font-size: 14px;
            a{
              color: inherit;
            }
          }
        }
      }
    }
</style>
