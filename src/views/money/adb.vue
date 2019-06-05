<template>
    <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200" alt="">
      </section>
    </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
    export default {
        name: 'hello',
        components:{
          Panel
        },
        data() {
            return {
              title:'理财专享'
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
        padding-bottom: 23px;
        img{
          font-size: 0px;
          width: 100%;
          display: block;
          height: 86px;
        }
      }
    }
</style>
