<template>
    <section class="title">
        <header class="title__header">
            <h1>{{ mensaje }}</h1>
        </header>
        <ul v-if="formacionAcademica.length">
            <li v-for="(item,key) of formacionAcademica" :key="key">
                {{item.titulo}} {{item.fecha}}
                <ul>
                    <li>{{item.centro}}</li>
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