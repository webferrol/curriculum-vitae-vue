<template>
  <section class="home main">
    <div class="column-1">
      <formacion-academica mensaje="Formación académica"></formacion-academica>
      
    </div>
    <div class="column-2">
      
     <presentacion-personal></presentacion-personal>
      
    </div>
    
    
  </section>
</template>

<script>
// @ is an alias to /src
import FormacionAcademica from '@/components/FormacionAcademica.vue'
import PresentacionPersonal from '@/components/PresentacionPersonal.vue'


export default {
  name: 'Home',
  components: {
    'formacion-academica':FormacionAcademica,
    'presentacion-personal': PresentacionPersonal
  }
}
</script>

<style lang="scss" scoped>
  $tablet: 720px;
  $desktop: 1020px;
  .main{
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 24px;
    @media (min-width: $tablet){
      grid-template-columns: repeat(12,1fr);
    }
    .column-1{
      @media (min-width: $tablet){
        grid-column: 1 / span 6;
      }
      @media (min-width: $desktop){
        grid-column: 1 / span 4;
      }
      background: chocolate;
    }
    .column-2{
      @media (min-width: $tablet){
        grid-column: 7 / span 6;
      }
       @media (min-width: $desktop){
        grid-column: 5 / span 8;
      }
    }
  }
 
</style>
