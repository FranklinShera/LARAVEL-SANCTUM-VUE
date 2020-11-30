<template>
       <nav class=" container shadow-sm  navbar navbar-expand-lg navbar-light bg-light mb-4">
           <router-link  :to="{ path: '/'}"class="navbar-brand" >ELSANCTUM</router-link>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                   <li class="nav-item active">
                       <router-link class="nav-link" :to="{ path: '/'}">Home <span class="sr-only">(current)</span></router-link>
                   </li>

                   <li class="nav-item" v-if="!this.$store.getters.getUser">
                       <router-link class="nav-link" :to="{ path: '/user-login'}">Login</router-link>
                   </li>
                   <li class="nav-item" v-if="!this.$store.getters.getUser">
                       <router-link class="nav-link" :to="{ path: '/register-user'}">Register</router-link>
                   </li>

                   <li class="nav-item" v-if="this.$store.getters.getUser">
                       <router-link class="nav-link" :to="{ path: '/dashboard'}">Dashboard</router-link>
                   </li>

               </ul>
           </div>
       </nav>

</template>

<script>
    export default {
        name: 'Navbar',
        mounted() {
            console.log('Navbar Component mounted.')
        }
    }
</script>
