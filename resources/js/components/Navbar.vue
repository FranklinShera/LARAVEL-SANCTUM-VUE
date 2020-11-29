<template>
       <nav class=" container shadow-sm  navbar navbar-expand-lg navbar-light bg-light mb-4">
           <a class="navbar-brand" href="#">SANCTUM</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                   <li class="nav-item active">
                       <router-link class="nav-link" :to="{ path: '/'}">Home <span class="sr-only">(current)</span></router-link>
                   </li>

                   <li class="nav-item">
                       <router-link class="nav-link" :to="{ path: '/login'}">Login</router-link>
                   </li>
                   <li class="nav-item">
                       <router-link class="nav-link" :to="{ path: '/register'}">Register</router-link>
                   </li>

                   <li class="nav-item">
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
