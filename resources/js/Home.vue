<template>
    <div class="home py-2">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    export default {
        name : 'Home',
        components:{
            Navbar
        },
        mounted() {
            console.log('Home Component mounted.')
        }
    }
</script>
