<template>
  <div id="app">
    <the-menu></the-menu>    
    <div class="container">
      <router-view/>
    </div>    
  </div>
</template>

<script>

import TheMenu from '@/components/TheMenu.vue'

export default {
  components:{
    'the-menu': TheMenu
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
  background: url(https://ubunlog.com/wp-content/uploads/2016/08/Fondo-Sylvia-Ritter.png);
  background-size: cover;
}
h1,h2,h3{
  margin-top: 0;
  margin-bottom: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  
}

.container{
  background-color: white;
}


</style>
