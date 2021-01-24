<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script>

import MainMenu from '@/components/MainMenu.vue'

export default {
  components:{
    'main-menu': MainMenu
  }
}
</script>

<style lang="scss">
html{
  font-size: 100%;
  box-sizing: border-box;
}
*,
*::before,
*::after{
  box-sizing: inherit;
}
body{
  margin: 0;
}
#app {
  width: 99vw;
  margin-left: auto;
  margin-right: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
