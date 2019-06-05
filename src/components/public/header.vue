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
      color: #333;
      font-size: 14px;
      height: 44px;
      line-height: 44px;
      position: fixed;
      top: 0;
      left:0;
      right: 0;  //宽度等于100%
      z-index: 100;
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      .left{
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        margin-left: 8px;
        em{
          font-style: normal;
        }
      }
      .btnDownload{
        @include btn();
        float: right;
        font-size: 14px;
        border-width: 0;
        height: 28px;
        line-height: 28px;
        min-width: 60px;
        padding:0;
        border-radius: 2px;
        margin: 8px 12px;
      }
    }
</style>
