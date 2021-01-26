<template>
    <nav class="main-menu nav nav-pills nav-fill"> 
        <router-link class="nav-item nav-link" v-for="(item,key) of getMenuPrincipal" :key="key" :to="item.enlace">{{ item.texto}}</router-link> 
    </nav>
</template>

<script>

import {mapGetters} from "vuex"

export default {
    name: 'TheMenu',
    computed: {
        ...mapGetters(['getMenuPrincipal'])
    },
    data(){
        return {
            enlaces: [
                {texto: 'Home', enlace: '/'},
                {texto: 'Sobre', enlace: '/about'},
                {texto: 'Experiencia laboral', enlace: '/work-experience'}
            ]
        }
    }
    
}
</script>


<style lang="scss" scoped>
     $bg-color: rgba(#007bff,.5);
    .main-menu{
       
        display: flex;
        flex-wrap: wrap;

        a {
            flex-grow: 1;
            flex-basis: 25%;
            flex-shrink: 0;
            
            background-color: rgba( white,.3);
            
            color: white;
            text-align: center;

            text-decoration: none;
            font-size: 1rem;
            font-weight: 400;
            line-height: 3;

            text-transform: uppercase;

            transition-property: all;
            transition-duration: .5s;
            transition-timing-function: ease-in-out;
            
            &:hover{
                //color: #000;
                background-color: rgba( $bg-color,.2);
                //transform: scale3d(1.05,1,1);

            }

            &.router-link-exact-active{
                color: #fff;
                background-color: $bg-color;
                transition-property: all;
                transition-duration: .5s;
                transition-timing-function: ease-in-out;
                &:hover{
                    background-color: rgba( $bg-color,.8);
                }
            }
        }
    }
</style>