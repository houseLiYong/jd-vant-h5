<template>
    <Panel :title="title" :class="$style.panel">
      <ul :class="$style.content">
        <router-link :to="{ path:item.path }" v-for="(item, index) in postItems" :key="index" tag="li"   exat>
          <i :class="item.icon" class="icon iconfont"></i>
          <p>{{ item.title }}</p>
        </router-link>
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
          postItems:{
            type:Array,
            default:[],
          },
          postTitle:{
            type:String,
            default:''
          }
        },
        data() {
              return {
                title:this.postTitle,
                current:0
              }
          },
        computed: {
            message:function () {
              return this.postTitle;
            }
        },
        beforeCreate:function () {
          console.group('子组件beforeCreate')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        created:function () {
          console.group('子组件Created')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        beforeMount:function () {
          console.group('子组件beforeMount')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        mounted:function () {
          console.group('子组件mounted')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
          this.init();
        },
        beforeUpdate:function () {
          console.group('子组件beforeUpdate')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        updated:function () {
          console.group('子组件update')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        activated:function () {
          console.group('子组件activated')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        beforeDestory:function () {
           console.group('子组件beforeDestory')
           console.log('this',this)
           console.log('el',this.$el)
           console.log('data',this.$data)
         },
        destoryed:function () {
          console.group('子组件destoryed')
          console.log('this',this)
          console.log('el',this.$el)
          console.log('data',this.$data)
        },
        methods: {
            init: function () {
              console.log('获取数据',this.postTitle);
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .router-link-exact-active{
    color: red;
  }
  .router-link-active{
    color: red;
  }
</style>
<style lang="scss" module>
    @import "../../../static/css/element";
    .panel{
      @include panel();
      height: 50px;
      background: #fff;
      box-shadow:0 -3px 4px rgba(0,0,0,.03) ;
      position: fixed;
      z-index: 998;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 768px;
      &>h4{
        display: none;
      }
      .content{
        @include flex(row);
        height: inherit;
        .active{
          color: red;
        }
        li{
          width: 20%;
          font-size: 0px;
          box-sizing: border-box;
          text-align: center;
          i{
            width: 22px;
            height: 22px;
            margin: 6px auto 3px;
            display: block;
          }
          p{
            font-size: 11px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
</style>
