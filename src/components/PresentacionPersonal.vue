<template>
    <section class="seccion">
        <h2>
        <span v-for="(item,key) in etiquetasProfesionales" :key="key">
            [{{item}}]
        </span>
        </h2>
      <figure>
        <img class="foto" alt="Vue logo" src="@/assets/vuex.png">
        <figcaption>
            <p v-for="(item,key) of presentacion" :key="key">
                {{item}}
            </p>
        </figcaption>
      </figure>
    </section>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name: 'PresentacionPersonal',
    computed:{
        ...mapState(['etiquetasProfesionales'])
    },
    methods:{
        ...mapActions(['getEtiquetasProfesionales'])
    },
    beforeMount(){
        //this.getEtiquetasProfesionales(),
        this.$store.dispatch("getEtiquetasProfesionales");
    },
    mounted() {
        //this.$store.dispatch("getEtiquetasProfesionales");
    },   
    data(){
        return {
            presentacion: [
                'Me presento. Soy un desarrollador informático de mente inquieta con grandes ideas en el ámbito de la progamación. Especialista en el desarrollo web e interesado en el análisis SEO.',
                'Me encanta mi labor en el ámbito de la divulgación por lo cual he ampliado mis horizontes al ámbito de la educación y formación en el desarrollo de aplicaciones web.',
                'También como gestor de contenidos web soy muy puntilloso con la divulgación y la elaboración de publicaciones en la red.'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.foto{
    width: 100%;
    object-fit: cover;
}
</style>