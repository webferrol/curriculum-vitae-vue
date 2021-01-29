<template>
  <section class="home main">
    <div class="column-1">
      <formacion-academica mensaje="Formación académica" />
      
    </div>
    <div class="column-2">
      <h2>[Informático][Programador][Desarrollador web][Gestor de contenidos][Analista SEO][Web 2.0][Formador][Educador]</h2>
      <figure>
        <img class="foto" alt="Vue logo" src="../assets/logo.png">
        <figcaption>
          <p>Me presento. Soy un desarrollador informático de mente inquieta con grandes ideas en el ámbito de la progamación.
Especialista en el desarrollo web e interesado en el análisis SEO.</p><p>
Me encanta mi labor en el ámbito de la divulgación por lo cual he ampliado mis horizontes al ámbito de la educación y formación en el desarrollo de aplicaciones web.</p><p>También como gestor de contenidos web soy muy puntilloso con la divulgación y la elaboración de publicaciones en la red.</p></figcaption>
      </figure>
      
    </div>
    
    
  </section>
</template>

<script>
// @ is an alias to /src
import FormacionAcademica from '@/components/FormacionAcademica.vue'


export default {
  name: 'Home',
  components: {
    'formacion-academica':FormacionAcademica
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
