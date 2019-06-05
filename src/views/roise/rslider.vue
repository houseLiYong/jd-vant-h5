<template>
  <Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="options">
        <swiper-slide>百万白条免费送，速来领取 <em>></em></swiper-slide>
        <swiper-slide>签到领流量，1元500M <em>></em></swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>
<script>
  import "swiper/dist/css/swiper.css";
  import { swiper,swiperSlide } from 'vue-awesome-swiper';
  import Panel from '../../core/panel.vue'
    export default {
        components:{
          Panel,
          swiper,
          swiperSlide
        },
        data() {
            return {
              options:{
                autoplay:true,
                direction:'vertical',
                loop:true,
                //控制分页器的按钮是否显示
              }
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
<style lang="scss">
  .swiper-container-vertical{
    height: 36px;
    .swiper-slide{
      font-family: PMingLiU-ExtB;
      font-size: 14px;
      color: #333333;
      em{
        color: #ddd;
        float: right;
      }
    }
  }
</style>
<style lang="scss" module>
    @import "../../../static/css/element";
    .panel{
      @include panel();
      margin-top: 50px;
      &>h4{
        display: none;
      }
      .content{
        box-sizing: border-box;
        margin: 0 10px;
        height: 36px;
        line-height: 36px;
        overflow: hidden;
        padding-left: 70px;
        background: url("https://img10.360buyimg.com/mcmktadmin/jfs/t1/74638/6/1051/10353/5cf4e7abE926714ee/b689db45e446f605.png?width=60&height=36") 0 0 no-repeat;
        background-size: 60px 36px;
      }
    }
</style>
