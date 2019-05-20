<template>
    <section :class="name" >
      <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in items" :key="item.href">
          <router-link :to="{ name:item.href }">
            <img :src="item.src" style="width: 100%" alt="">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination"></div>
      </swiper>
    </section>
</template>
<script>
  import "swiper/dist/css/swiper.css";
  import { swiper,swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'hello',
        props:{
          options:{
            type:Object,
            default(){
              return {
                autoplay:true,
                loop:true,
                pagination:{
                  el:'.swiper-pagination'
                },
                notNextTick:false
              }
            }
          },
          items:{
            type:Array,
            default(){
              return []
            }
          },
          name:{
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
<style lang="scss" >
    @import "../../static/css/element";
  .slider{
    margin-top: px2rem(60);
    font-size: 0;
  }
</style>
