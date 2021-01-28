<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<style lang="scss" scoped>
  .about{
    display: grid;
    grid-template-columns: repeat(12,1fr);
    gap: 12px;
    min-height: 80vh;
    align-items: center;
    background: red;

    h1{
      grid-column-start: 2;
      grid-column-end: span 4;
      background: yellow;
    }
  }
</style>