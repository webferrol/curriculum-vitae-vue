<template>
    <section class="section-title">
        <header>
            <h1>Proyectos</h1>
            Componente {{ $route.params.id }}
            <router-link v-for="(item,key) of rutas" :key="key" :to="{name: 'projects', params: {id: item.id}}">
                <div>
                    <button>{{ item.id }}</button>
                </div>
            
            </router-link>
            <componente-proyecto v-if="$route.params.id" :src="GET_SRC($route.params.id)"></componente-proyecto>
        </header>
    </section>
</template>

<script>

import VProject from '@/components/VProject.vue'

export default { 
    components:{
        'componente-proyecto':VProject
    },
     data(){
        return {
            rutas: [
                {id: 1, name: 'Uno', src: 'http://placeimg.com/640/480/any'},
                {id: 2, name: 'Dos', src: 'http://placekitten.com/640/480'},
                {id: 3, name: 'Tres', src: 'https://via.placeholder.com/640/480'}
            ]
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