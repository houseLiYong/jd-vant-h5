<template>
    <div :class="[btnClass,cname]">
      <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'btn',
        props:{
          cname:{
            type:String,
            default:'',
          }
        },
        data() {
            return {
              btnClass:'btn'
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
    @import "../../static/css/element";
    .btn{
      @include btn;
    }
</style>
