<template>
    <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
        <div :class="$style.topContainer">
          <div :class="$style.gold">
            <img src="https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
            <p :class="$style.txt1">最高可借</p>
            <p :class="$style.txt2"><span>￥</span>3000</p>
            <p :class="$style.txt3">立即登录</p>
          </div>
        </div>
        <Slider :items="items" :cname="$style.slider" :options="options"></Slider>
      </section>
    </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
  import Slider from '../../core/slider.vue'
    export default {
        components:{
          Panel,
          Slider
        },
        data() {
            return {
              title:'轮播图',
              options:{
                notNextTick:true,
                autoplay:{
                  delay:3000,
                },
                speed:1000,
                loop:true,

              },
              items:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/12277/16/15363/78163/5caf2fe1Ea8b5743e/5afe5457e88a1e33.jpg?width=1080&height=240',
                href:'/home'
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t22897/39/1541754983/14812/d61317bc/5b6263e4Nbd9cf24d.png?width=690&height=154',
                href:'/home'
              },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240',
                href:'/home'
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
      h4{
        display: none;
      }
      .content{
        background-image: url("https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        .topContainer{
          width: 100%;
          height: auto;
          padding-top: 60px;
          padding-left: 15px;
          padding-right: 15px;
          box-sizing: border-box;
          .gold{
            position: relative;
            color: #fff;
            img{
              width: 100%;
            }
            .txt1{
              font-size: 12px;
              position: absolute;
              top:18%;
              left: 10%;
            }
            .txt2{
              position: absolute;
              top:30%;
              left:10%;
              font-size: 28px;
              text-align: left;
              span{
                font-size: 20px;
                margin-left: -3px;
              }
            }
            .txt3{
              position: absolute;
              top:50%;
              left:10%;
              font-size: 12px;
              height: 30px;
              line-height: 30px;
              width: 80px;
              background: url("https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png") 0 0 no-repeat;
              background-size: 100% 100%;
              font-weight: 500;
              text-align: center;
            }
          }
        }
        .slider{
          margin-top: 0px;
        }
      }
    }
</style>
