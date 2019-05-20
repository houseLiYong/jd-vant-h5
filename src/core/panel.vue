<template>
  <section :class="[panelClass,cname]">
    <h4>-{{ title }}-</h4>
    <slot></slot>
  </section>
</template>
<script>
    export default {
        name: 'panel',
        props:{
          cname:{
            type:String,
            default:''
          },
          title:{
            type:String,
            default:''
          },
        },
        data() {
            return {
              panelClass:'panel',
            }
        },
        methods: {
            init: function () {

            },
            change:function () {
              this.$emit('welcome','子组件')
            },
        },
        mounted: function () {
            this.init()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../static/css/element";
    .panel{
      @include panel();
    }
</style>
