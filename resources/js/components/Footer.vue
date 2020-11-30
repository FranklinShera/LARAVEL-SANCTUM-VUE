<template>
       <footer>
            <h5>Thanks For Trying Out This Project!</h5>

       </footer>

</template>

<script>
    export default {
        name: 'Footer',
        mounted() {
            console.log('Navbar Component mounted.')
        }
    }
</script>

<style scoped>
    footer{
        width :100%;
        position: absolute;
        bottom: 0;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

</style>
