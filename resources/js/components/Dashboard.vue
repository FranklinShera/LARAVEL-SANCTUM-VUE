<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-5">Hello {{ this.$store.getters.getUser.name }} Welcome On Board!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-danger btn-lg" href="#" role="button" @click.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Dashboard',
        mounted() {
            // if(!this.$store.getters.getUser){
            //     this.$router.push('/user-login')
            // }
        },
        methods:{
            logout(){
                axios.post('/logout').then(res => {
                    localStorage.removeItem('isLoggedIn')

                    localStorage.removeItem('loggedUser')

                    this.$store.commit('setLoggedUser', null)
                    this.$router.push('/user-login')
                })
            }
        }
    }
</script>
