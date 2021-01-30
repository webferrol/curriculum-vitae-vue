<template>
  <div id="app" class="container">
    <div class="header">
     <the-menu></the-menu>
    </div>       
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <base-footer></base-footer>
    </div>    
  </div>
</template>

<script>

import TheNavBar from '@/components/TheNavBar.vue';
import BaseFooter from '@/components/BaseFooter';

export default {
  components:{
    'the-menu': TheNavBar,
    'base-footer': BaseFooter
  }
}
</script>

<style lang="scss">
$tablet: 720px;
$desktop: 1020px;
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
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
  background: black;
  background-size: cover;

  font-family: 'Source Code Pro', monospace;
  line-height: 1.5em;
}
h1,h2,h3{
  margin-top: 0;
  margin-bottom: 0;
}
h1{
  font-size: 1.6em;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;

  
// }

.container{
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  .content{
    padding: 1em;
    background-color: white;
  }
}


</style>
