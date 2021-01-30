<template>
    <section class="title">
        <header class="title__header">
            <h1>{{ mensaje }}</h1>
        </header>
        <ul v-if="formacionAcademica.length">
            <li v-for="(item,key) of formacionAcademica" :key="key">
                <strong>{{item.titulo}}</strong>. {{item.fecha}}
                <ul>
                    <li><em>{{item.centro}}</em></li>
                </ul>
            </li>
        </ul>
        <button @click="getFormacionAcademica">Cursos</button>
    </section>
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
    name: 'FormacionAcademica',
    computed:{
        ...mapState(['formacionAcademica'])
    },
    props:{
        mensaje: String
    },
    methods:{
        ...mapActions(['getFormacionAcademica'])
    },
    beforeMount(){
        this.getFormacionAcademica() //Si queremos mostrarlo sin hacer click en el botón
    }
}
</script>

<style lang="scss" scoped>
.title__header{
    font-variant: small-caps;
}
ul{
    background: yellow;
}
</style>