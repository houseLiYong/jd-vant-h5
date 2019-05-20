<template>
    <div class="hello">
        <p>post</p>

        <post1 ></post1>
        <post2></post2>
    </div>
</template>
<script>
  import post1 from '@/components/post1'
  import post2 from '@/components/post2'
    export default {
        name: 'post',
        data() {
            return {}
        },
        components:{
          post1,
          post2
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

</style>
