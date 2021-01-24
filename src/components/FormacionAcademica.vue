<template>
    <section class="title">
        <header class="title__header">
            <h1>{{ mensaje }}</h1>
        </header>
    </section>
</template>

<script>
export default {
    name: 'FormacionAcademica',
    props:{
        mensaje: String
    }
}
</script>

<style lang="scss" scoped>
.title__header{
    font-variant: small-caps;
}
</style>