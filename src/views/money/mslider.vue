<template>
    <Panel :title="title" :class="$style.panel" >
      <section :class="$style.content">
        <Slider :items="items" :cname="$style.slider"></Slider>
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
              items:[{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320",
              },{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320",
              },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320'
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
        .slider{}
      }
    }
</style>
