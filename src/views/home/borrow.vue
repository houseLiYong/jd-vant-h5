<template>
  <Panel :title="title"  :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name:'home',params:{} }">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22897/39/1541754983/14812/d61317bc/5b6263e4Nbd9cf24d.png?width=690&height=154" alt="">
      </router-link>
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
              title:"极速借贷"
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
      .content{
        padding-bottom: 20px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
</style>
