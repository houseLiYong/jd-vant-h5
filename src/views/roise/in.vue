<template>
    <Panel :title="title" :class="$style.panel">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/12124/17/11858/46303/5c92faf7E65f4674a/94bc59efd2d056e9.jpg?width=750&height=200" alt="">
      <section :class="$style.content">
        <div :class="$style.inLeft">
          <img src="http://img30.360buyimg.com/cf/jfs/t1/33367/25/10407/58900/5cce5470Ee8b785e6/25540281294246c1.jpg!q70.dpg" alt="">
          <p :class="$style.txt1">天有王母蟠桃 地有秦安蜜桃</p>
          <p :class="$style.txt2"><em>49.00</em>起</p>
          <div :class="$style.progressWrap">
            <div :class="$style.progress">
              <div :class="$style.progressInner"></div>
            </div>
            <span>20%</span>
          </div>
        </div>
        <div :class="$style.inRight">
          <img src="http://img30.360buyimg.com/cf/jfs/t1/33367/25/10407/58900/5cce5470Ee8b785e6/25540281294246c1.jpg!q70.dpg" alt="">
          <p :class="$style.txt1">天有王母蟠桃 地有秦安蜜桃</p>
          <p :class="$style.txt2"><em>49.00</em>起</p>
          <div :class="$style.progressWrap">
            <div :class="$style.progress">
              <div :class="$style.progressInner"></div>
            </div>
            <span>20%</span>
          </div>
        </div>
      </section>
      <section :class="$style.content">
        <div :class="$style.inLeft">
          <img src="http://img30.360buyimg.com/cf/jfs/t1/33367/25/10407/58900/5cce5470Ee8b785e6/25540281294246c1.jpg!q70.dpg" alt="">
          <p :class="$style.txt1">天有王母蟠桃 地有秦安蜜桃</p>
          <p :class="$style.txt2"><em>49.00</em>起</p>
          <div :class="$style.progressWrap">
            <div :class="$style.progress">
              <div :class="$style.progressInner"></div>
            </div>
            <span>20%</span>
          </div>
        </div>
        <div :class="$style.inRight">
          <img src="http://img30.360buyimg.com/cf/jfs/t1/33367/25/10407/58900/5cce5470Ee8b785e6/25540281294246c1.jpg!q70.dpg" alt="">
          <p :class="$style.txt1">天有王母蟠桃 地有秦安蜜桃</p>
          <p :class="$style.txt2"><em>49.00</em>起</p>
          <div :class="$style.progressWrap">
            <div :class="$style.progress">
              <div :class="$style.progressInner"></div>
            </div>
            <span>20%</span>
          </div>
        </div>
      </section>
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
              title:'每日推荐'
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
      >h4{
        display: none;
      }
      >img{
        width: 100%;
        padding-top: 10px;
      }
      .content{
        @include flex(row);
        box-sizing: border-box;
        margin-top: 20px;
        background: #f3f5f7;
        position: relative;
        &:after{
          content: " ";
          width: 4px;
          height: 210px;
          border-right: 4px solid #f3f5f7;
          position: absolute;
          top: -20px;
          left: 50%;
          right: 50%;
        }
        >div{
          width: 50%;
          background: #ffffff;
          margin-bottom: 5px;
          box-sizing: border-box;
          &:nth-child(odd){
            box-sizing: border-box;
            padding: 0 2px 5px 0;
          }
          &:nth-child(even){
            box-sizing: border-box;
            padding: 0 2px 5px 0;
          }

          img{
            width: 160px;
            height: 90px;
            padding: 0 30px;
            box-sizing: border-box;
          }
          >p{
            padding-left: 15px ;
          }
          .progressWrap{
            padding: 0 15px;
            margin-bottom: 10px;
            &:after{
              content:".";
              display:block;
              height:0;
              clear:both;
              visibility:hidden;
            }
            >span{
              float: left;
              margin-left: 10px;
              color: #999;
              font-size: 10px;
              display: inline-block;
              text-align: center;
              height: 10px;
              line-height: 10px;
            }
            .progress{
              width: 70%;
              background: #f3f5f7;
              border-radius: 5px;
              height: 6px;
              float: left;
            }
            .progressInner{
              width: 20%;
              height: 6px;
              border-radius: 5px;
              background-image: linear-gradient(270deg,#f55,1%,#ff9c31);
              font-weight: 700;
            }
          }
          .txt1{
            font-size: 14px;
            height: 16px;
            line-height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 10px 0;
            font-family: PingFangSC-Regular;
            font-weight: 400;
          }
          .txt2{
            color: #999;
            font-size: 16px;
            margin-bottom: 5px;
            em{
              font-size: 14px;
              height: 16px;
              line-height: 16px;
              color: #ff9a1c;
              &:before{
                font-size: 12px;
                content: "￥";
                color: #f92;
              }
              &:after{
                content: "";
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
</style>
