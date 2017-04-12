<template>
  <div id="app" @click="demo1">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    methods: {
      demo1 () {
        this.$bus.$emit('chufa')
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>
