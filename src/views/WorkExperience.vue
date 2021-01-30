<template>
     <section class="home main">
    <div class="column-1">
      lala
      
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

<style lang="scss" scoped>
    $tablet: 720px;
    .main{
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 24px;

        grid-template-areas: 
        "column1"
        "column2";

        @media (min-width: $tablet){
            grid-template-areas: 
            "column2 column1";    
        }
        .column-1{
            grid-area: column1;
        }
        .column-2{
            grid-area: column2;
        }
    }
</style>