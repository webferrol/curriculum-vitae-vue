<template>
    <section class="section-title">
        <header>
            <h1>Proyectos</h1>
            <componente-proyecto></componente-proyecto>
        </header>
    </section>
</template>

<script>

import VProject from '@/components/VProject.vue'

export default { 
    components:{
        'componente-proyecto':VProject
    }  
}
</script>