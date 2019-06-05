<template>
    <Panel :title="title" :class="[$style.panel,cname]" >
        <ul :class="$style.content">
          <li >
            <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
          </li>
          <li>
            <p>投资有风险，购买需谨慎</p>
          </li>
          <li>
            <p>京东金融平台服务协议</p>
          </li>
          <li>
            <p>
              京东金融隐私政策
            </p>
          </li>
        </ul>
    </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
    export default {
        components:{
          Panel
        },
        props:{
          cname:{
            type:String,
            default:''
          }
        },
        data() {
            return {
              title:'公司信息'
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
      background: #f5f5f5;
      &>h4{
        display: none;
      }
      .content{
        @include flex(row);
        li{
          width: 100%;
            p{
              font-size: 12px;
              color: #999;
              padding: 12px 16px;
              box-sizing: border-box;
              line-height: 1.6;
              text-align: center;
              position: relative;
              &::after{
                content: " ";
                position: absolute;
                top:0;
                left: 0;
                width: 100%;
                height: 1px;
                display: block;
                transform: scaleY(.5);
                transform-origin: 0 0;
                background: #DDD;
              }
            }
        }
      }
    }
</style>
