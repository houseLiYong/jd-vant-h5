<template>
  <Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.whiteLeft">
        <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
      </div>
      <div :class="$style.whiteRight">
        <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="">
        <p :class="$style.txt1"></p>
        <p :class="$style.txt2">小白信用</p>
        <p :class="$style.txt3">登录查看</p>
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
              title:'白条服务'
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
      background: #ffffff;
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
      .content{
        @include flex(row);
        padding-bottom: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 140px;
        padding: 0 10px 15px 10px;
        .whiteLeft{
          box-sizing: border-box;
          width: 64%;
          img{
            width: 100%;
          }
        }
        .whiteRight{
          width: 36%;
          position: relative;
          img{
            width: 100%;
          }
          p{
            position: absolute;
          }
          .txt2{
            top: 36%;
            left: 0;
            right: 0;
            padding-right: 6%;
            color: #ffeac9;
            font-size: 12px;
            box-sizing: border-box;
            text-align: center;
          }
          .txt3{
            top: 68%;
            left: 0;
            right: 0;
            color: #ae8339;
            font-size: 12px;
            line-height: 16px;
            box-sizing: border-box;
            text-align: center;
          }
        }
      }
    }
</style>
