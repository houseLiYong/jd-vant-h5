<template>
    <section :class="cname" >
      <swiper :options="options" :not-next-tick="options.notNextTick" ref="mySwiper">
        <swiper-slide v-for="item in items" :key="item.href">
          <router-link :to="{ name:item.href }">
            <img :src="item.src" style="width: 100%" alt="">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination"    slot="pagination"></div>
      </swiper>
    </section>
</template>
<script>
  import "swiper/dist/css/swiper.css";
  import { swiper,swiperSlide } from 'vue-awesome-swiper';
    export default {
        props:{
          options:{
            type:Object,
            default(){
              return {
                notNextTick:true,
                autoplay:{
                  delay:1000,
                },
                speed:800,
                loop:true,
                //控制分页器的按钮是否显示
                pagination:{
                  el:'.swiper-pagination',
                  clickable: true,
                },
              }
            }
          },
          items:{
            type:Array,
            default(){
              return []
            }
          },
          cname:{
            type:String,
            default:'slider',
          }
        },
        data() {
            return {

            }
        },
        components:{
          swiper,
          swiperSlide
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
    @import "../../static/css/element";
    .slider{
      margin-top: px2rem(60);
      font-size: 0;
    }
</style>
