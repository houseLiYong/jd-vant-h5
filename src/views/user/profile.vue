<template>
    <div class="hello">
        <p>profile</p>
    </div>
</template>
<script>
    export default {
        name: 'profile',
        data() {
            return {}
        },
        methods: {
            init: function () {

            }
        },
        mounted: function () {
            this.init()
        },
        beforeRouteUpdate (to, from, next){
          console.log('组件内守卫',to);
          console.log('组件内守卫',from);
          console.log('组件内守卫',next());
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import "../../../static/css/element";

</style>
