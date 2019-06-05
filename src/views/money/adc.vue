<template>
  <Panel :class="$style.panel" :title="title">
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
    </section>
  </Panel>
</template>
<script>
    export default {
        name: 'hello',
        data() {
            return {
              title:'白条'
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
      >h4{
        display: none;
      }
      .content{
        img{
          width: 100%;
          height: 86px;
          display: block;
        }
      }
    }
</style>
