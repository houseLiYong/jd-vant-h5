<template>
    <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
        <div class="arrow" @click="more()">
          更多尖货 >
        </div>
        <Slider :options="options" :items="items"  cname="product-slider"></Slider>
      </section>
    </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
  import Slider from '../../core/slider.vue'
    export default {
        data() {
            return {
              title:'新品推荐',
              options:{
                slidesPerView:2.3,
                spaceBetween:12,
                freeMode:true,
//                pagination:{
//                  el:'.swiper-pagination',
//                  clickable:true,
//                },
              },
              items:[{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
              },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
              },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
              },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'
              }],
            }
        },
        components:{
          Panel,Slider
        },
        methods: {
            //更多尖货
            more:function () {
              alert('更多页面')
            },
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
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 12px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 157px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
    @import "../../../static/css/element";
    .panel{
      @include panel();
      &>h4{
        &:before{
          content: '-';
          display: inline-block;
        }
        &:after{
          content: '-';
          display: inline-block;
        }
      }
      .content{
        padding-bottom: 20px;
        position: relative;
        &>div{
          position: absolute;
          font-size: 11px;
          color: #999;
          right: 16px;
          top: -30px;
        }
      }
    }
</style>
