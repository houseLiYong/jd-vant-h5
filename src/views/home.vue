<template>
    <div class="home">
      <Heador></Heador>
    </div>
</template>
<script>
  import Heador from '../components/public/header.vue'
      export default {
        name: 'home',
        data() {
            return {
              name:'home'
            }
        },
        components:{
          Heador
        },
        computed:{
          username(){
            return this.$route.path;
          }
        },
        methods: {
            init: function () {
                console.log(this.$route);
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
    a{
      @include link-colors(blue, red, green);
    }
</style>
