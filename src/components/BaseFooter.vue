<template>
    <footer>
        {{ who }}
    </footer>
</template>

<script>
export default {
    name: 'BaseFooter',
    data(){
        return {
            who: 'WebFerrol.com'
        }
    }
}
</script>