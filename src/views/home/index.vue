<template>
    <div class="home">
      <Heador ref="profile"></Heador>
      <Hslider></Hslider>
      <Notice></Notice>
      <Borrow></Borrow>
      <Money></Money>
    </div>
</template>
<script>
  import Heador from '../../components/public/header.vue'
  import Hslider from './hslider.vue'
  import Notice from './notice.vue'
  import Borrow from './borrow.vue'
  import Money from './money.vue'
      export default {
        name: 'home',
        data() {
            return {
              msg:'',
              index:0,
              name:'home',
              title:'理财',
            }
        },
        provide:function () {
          return {
            foo:'bar'
          }
        },
        components:{
          Heador,
          Hslider,
          Notice,
          Borrow,
          Money
        },
        computed:{
          username(){
            return this.$route.path;
          },
        },
        methods: {
            init: function () {
              console.log(this.$route);
              console.log('profile',this.$refs);
              console.log('profile',this.$refs.profile)
            }
        },
        mounted: function () {
            this.init()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../../static/css/element";
    a{
      @include link-colors(blue, red, green);
    }
</style>
