<template>
    <nav class="main-menu nav nav-pills nav-fill"> 
        <router-link  
            v-for="(item,key) of getMenuPrincipal" 
            :key="key" 
            :to="{path: item.enlace}" 
            :class="{'router-link-exact-active': ($route.name === 'Projects') && item.id===4}">
            {{ item.texto}} 
            <!-- {{$route.name}} -->
        </router-link>
    </nav>
</template>

<script>

import {mapGetters} from "vuex"

export default {
    name: 'thenavbar',
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
     $tablet: 720px;
     $desktop: 1020px;
    .main-menu{
        
        @media (min-width: $tablet){
            display: flex;
        }
        
        

        a {
            display: flex;
            justify-content: flex-start;
            @media (min-width: $tablet) {
                flex-grow: 1;
                flex-basis: 25%;
                flex-shrink: 0;

                justify-content: center;
                align-items: center;
            }
            
            
            
            background-color: rgba( white,.3);
            
            color: white;
            

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