<template>
    <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/63259/11/578/59388/5cec92e4E953e94da/8bd2e0a7bce47f38.jpg?width=750&height=200" alt="">
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
            return {}
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
      >h4{
        display: none;
      }
      .content{
        padding-bottom: 23px;
        img{
          width: 100%;
          height: 86px;
          display: block;
        }
      }
    }
</style>
