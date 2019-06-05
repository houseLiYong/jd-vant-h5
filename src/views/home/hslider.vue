<template>
    <article >
      <Slider :items="items" :name="name" :options="options"></Slider>
      <section :class="$style.list">
        <div :class="$style.item" v-for="item in enters" :key="item.img">
          <router-link :to="{ name:item.href }">
            <img :src="item.img" :alt="item.title">
            <h4>{{ item.title }}</h4>
          </router-link>
        </div>
      </section>
    </article>
</template>
<script>
  import Slider from "../../core/slider.vue"
    export default {
        name: 'hello',
        data() {
            return {
              name:'slider',
              options:{
                notNextTick:true,
                autoplay:{
                  delay:3000,
                },
                speed:800,
                loop:true,
                pagination:{
                  el:'.swiper-pagination',
                  clickable: true,
                  bulletClass: 'my-bullet',
                  bulletActiveClass: 'my-bullet-active'
                },
              },
              items:[{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320",
              },{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320",
              },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320'
              }],
              enters:[ {
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title:'优惠券'
              },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title:"领福利"
              },{
                href:'home',
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title:'抢钢镚'
              },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title:'白条提额'
              },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                title:'工资理财'
              },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
                title:'众筹'
              },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90',
                title:'免费领金豆'
              },{
                href:'homr',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90',
                title:'免息红包'
              } ],
            }
        },
        components:{
          Slider,
        },
        methods: {
            init: function () {
              console.log('this',this.items);
            }
        },
        mounted: function () {
            this.init()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .my-bullet{
    margin: 0 3px;
    width: 10px;
    height: 5px;
    display: inline-block;
    border-radius: 10%;
    background: #000;
    opacity: .2;
  }
  .my-bullet-active{
    width: 10px;
    height: 5px;
    margin: 0 3px;
    opacity: 1;
    border-radius: 50%;
    background: #fff
  }

</style>
<style lang="scss" module>
    @import "../../../static/css/element";

    .list{
      @include list(row);
      background: #ffffff;
      padding-top: 20px;
      padding-bottom: 10px;
      justify-content: space-around;
      flex-wrap:wrap;
      &:after{
        content: '';
        flex: auto;
      }
      a{
        text-decoration: none;
      }
      .item{
        width: calc(25%);
        text-align: center;
        font-size: 0;
        img{
          display: inline-block;
          width: 45px;
          height: 45px;
        }
        h4{
          margin-top: 6px;
          color: #666;
          font-size: 14px;
          text-align: center;
          display: block;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
</style>
