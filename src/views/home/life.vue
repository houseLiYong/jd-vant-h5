<template>
      <Panel :title="title" :class="$style.panel">
          <ul :class="$style.content">
            <li :class="$style.item">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/71967/29/100/8974/5ce24a67E99e3598e/01aad70029ce55b2.png?width=90&height=90" alt="">
              <p>有钱赚</p>
            </li>
            <li :class="$style.item">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90" alt="">
              <p>双签</p>
            </li>
            <li :class="$style.item">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90" alt="">
              <p>优惠券</p>
            </li>
            <li :class="$style.item">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90" alt="">
              <p>单单返京豆</p>
            </li>
            <li :class="$style.item">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/71967/29/100/8974/5ce24a67E99e3598e/01aad70029ce55b2.png?width=90&height=90" alt="">
              <p>全部</p>
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
        data() {
            return {
              title:'生活服务'
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
      &>h4{
        &:before{
          content: '-';
          display: inline-block;
        }
        &:after{
          content: '-';
          display: inline-block;
        }
      }
      .content{
        @include flex(row);
        box-sizing: border-box;
        padding-bottom: 20px;
        .item{
           width: 20%;
           text-align: center;
          img{
            width: 45px;
            height: 45px;
          }
          p{
            font-size: 13px;
            color: #666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 6px;
          }
        }
      }
    }
</style>
