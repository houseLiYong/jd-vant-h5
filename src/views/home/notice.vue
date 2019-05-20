<template>
  <Panel :class="$style.panel" title="新手指引" >
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888红包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132" alt="">
            <h4 :class="$style.red">领128新手红包1111</h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90" alt="">
            <h4>打白条 <span :class="$style.red">享免息</span> </h4>
            <p :class="$style.gray">立即开通享好礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>
<script>
  import Panel from '../../core/panel.vue'
    export default {
        name: 'notice',
        data() {
            return {
              title:'111111111'
            }
        },
        components:{
          Panel
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
      >h4{
        border-bottom: 1px solid #ddd;
      }
      .content{
        @include list(row);
        .item{
          width: 50%;
          box-sizing: border-box;
          &:first-child{
            padding:16px 10px;
            text-align: center;
            border-right: 1px solid #ddd;
            img{
              width: 50px;
              height: 50px;
              margin: 20px auto 0;
            }
          }
          h4{
            font-size: 13px;
            line-height: 20px;
            font-weight: 200;
          }
          .red{
            color: #f00;
          }
          .gray{
            font-size: 12px;
            color: #999;
          }
          p{
            margin-top: 3px;
          }
          ul{
            width: 100%;
            li{
              height: 77px;
              width: 100%;
              padding: 16px 14px;
              box-sizing: border-box;
              &:nth-child(1){
                border-bottom: 1px solid #ddd;
              }
              img{
                width: 40px;
                height: 40px;
                float: right
              }
              h4{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
              }
              p{
                font-size: 13px;
              }
            }
          }
        }
      }
    }
</style>
