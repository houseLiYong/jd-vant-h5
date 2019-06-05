<template>
  <Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/16662/30/15341/22141/5caf3007Ed04371f5/92aeb35325e56d32.png?width=375&height=233" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/21337/31/13706/22340/5ca18608Ebdd6ea02/02d3b385bf9c045c.png?width=375&height=233" alt="">
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
              title:'每日签到'
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
        &:before,&:after{
          content: "-";
          width: 5px;
          display: inline-block;
          margin: 0  10px;
        }
      }
      .content{
        @include flex(row);
        box-sizing: border-box;
        padding-bottom: 20px;
        img{
          width: 160px;
          height: 100px;
        }
      }
    }
</style>
