<template>
    <section>
        <img v-bind:src="src" />
        
    </section>
</template>


<script>
export default {
   props:{
       'src' :{
           type: String
       }
   }
}
</script>