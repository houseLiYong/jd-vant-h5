<template>
    <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
        <div :class="$style.arrow" @click="more()">
          更多银行服务
        </div>
        <dl :class="$style.item" v-for="item in items" :key="item.title">
          <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
          <dd>{{ item.rate }}</dd>
          <dd>{{ item.text }}</dd>
        </dl>
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
              title:'理财精选',
              items:[{
                title:'定期理财',
                sub:'理财精选',
                rate:'5.66%',
                text:'历史年化收益率'
              },{
                title:'小白理财',
                sub:'理财首选',
                rate:'4.66%',
                text:'7日年化收益率'
              },{
                title:'月月盈',
                sub:'养老保障',
                rate:'5%',
                text:'7日年化收益率'
              },{
                title:'小白基金',
                sub:'天天赚钱',
                rate:'4.27%',
                text:'7日年化收益率'
              }]
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
        text-align: left;
        margin-left: 15px;
        font-weight: 700;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
      }
      .content {
        @include flex(row);
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        .arrow{
          position: absolute;
          top: -42px;
          right: 15px;
          font-size: 12px;
          color: #999;
          &:after{
            content: " > ";
            display: inline-block;
          }
        }
        &:after{
          content: " ";
          display: block;
          width: 100%;
          height: 0;
          border-bottom: 1px solid #eee;
          position: relative;
          top: -87px;
        }
        .item {
          position: relative;
          width: 50%;
          box-sizing: border-box;
          &::after {
            content: " ";
            width: 1px;
            height: 68px;
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            margin-top: -34px;
            border-right: 1px solid #eee;
          }
          &:nth-child(2n) {
            &::after {
              display: none;
            }
          }
          padding: 9px 8px;
          dt {
            font-size: 15px;
            line-height: 21px;
            color: #ff5155;
            color: #333333;
            span {
              font-size: 11px;
              color: #ff5155;
              border: 1px solid #ff5155;
              border: 1px solid #ff5155;
              padding: 0 4px;
              vertical-align: 1px;
              margin-left: 2px;
            }
          }
          dd {
            &:nth-child(2) {
              font-size: 22px;
              font-weight: 500;
              height: 29px;
              line-height: 29px;
              color: #ff5155;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            &:nth-child(3) {
              font-size: 12px;
              height: 17px;
              line-height: 17px;
              color: #999;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
      }
</style>
