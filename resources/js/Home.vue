<template>
    <div class="home py-2">
        <Navbar></Navbar>
            <Loader></Loader>
            <router-view></router-view>

        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";
    import Loader from "./components/Loader";
    export default {
        name : 'Home',
        components:{
            Loader,
            Navbar,
            Footer
        },
        mounted() {
            console.log('Home Component mounted.')
        }
    }
</script>
<style>


</style>
