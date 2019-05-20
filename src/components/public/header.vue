<template>
    <div :class="$style.header"  ref="header" data-id="000">
      <span :class="$style.left">
        <em @click="login" >注册</em>&nbsp;|&nbsp;<em>登录</em>
      </span>
      <btn :class="$style.btnDownload">APP下载</btn>
    </div>
</template>
<script>
  import btn from '../../core/btn.vue'
    export default {
        name: 'hello',
        inject:['foo'],
        data() {
            return {}
        },
        created(){
          console.log('foo',this.foo)
        },
        components:{
          btn,
        },
        methods: {
            init: function () {
              console.log('root',this.$root);
              console.log('parent',this.$parent);
            },
            login: function () {
              console.log('refs',this.$refs.header);
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
    .header{
      color: #666;
      font-size: px2rem(14);
      height: px2rem(50);
      line-height: px2rem(50);
      position: fixed;
      top: 0;
      left:0;
      right: 0;  //宽度等于100%
      z-index: 100;
      .left{
        font-size: px2rem(14);
        height: px2rem(15);
        line-height:px2rem(15);
        margin: px2rem(8) 0 0 px2rem(9);
        em{
          font-style: normal;
        }
      }
      .btnDownload{
        @include btn();
        float: right;
        font-size: px2rem(12);
        border-width: 0;
        height: px2rem(28);
        line-height: px2rem(28);
        min-width:px2rem(60);
        padding:0;
        border-radius: px2rem(2);
        margin:px2rem(14) px2rem(12) 0 0;
      }
    }
</style>
