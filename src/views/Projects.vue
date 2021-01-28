<template>
    <section class="section-title">
        <header>
            <h1>Proyectos   {{ getRuta }}</h1>
            Componente {{ $route.params.id }}
            <router-link v-for="(item,key) of rutas" :key="key" :to="{name: 'Projects', params: {id: item.id}}">
                <div>
                    <button>{{ item.id }}</button>
                </div>            
            </router-link>
            <componente-proyecto v-if="$route.params.id" :src="getRuta"></componente-proyecto>
        </header>
    </section>
</template>

<script>

import VProject from '@/components/VProject.vue'

export default { 
    name: 'Projects',
    components:{
        'componente-proyecto':VProject
    },
     data(){
        return {
            rutas: [
                {id: 1, name: 'Uno', src: 'http://placeimg.com/640/480/any'},
                {id: 2, name: 'Dos', src: 'http://placekitten.com/640/480'},
                {id: 3, name: 'Tres', src: 'https://via.placeholder.com/640/480'}
            ],
            ruta: 'Por defecto'
        }
    },
    computed:{
        getRuta(){
            let ruta = this.ruta;
            let id = this.$route.params.id??'';
            //console.log(this.rutas)
            let obj = this.rutas.find(elem => elem.id == id);
            ruta = (typeof obj === 'object' && obj !== null)?obj.src:'';

            return ruta;
        }
    },
    methods:{
        GET_SRC(id){
            let ruta = null;
            ruta = this.rutas.find(elem => elem.id === id);
            ruta = ruta?ruta.src:'';          
            return ruta;
        }
    }
}
</script>