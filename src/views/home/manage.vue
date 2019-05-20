<template>
      <panel :class="$style.manege" v-on:give-advice="showAdvice" :title="title" :size="size">
      </panel>
</template>
<script>
  import panel from '../../core/panel.vue'
    export default {
        name: 'hello',
        data() {
            return {
              title:'理财精选',
              size:[]
            }
        },
        components:{
          panel
        },
        methods: {
            init: function () {
              let self = this;
            },
            showAdvice:function (advice) {
              alert(advice);
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
    .manege{
      @include panel();
      div{
        font-size: 0;
      }
    }
</style>
