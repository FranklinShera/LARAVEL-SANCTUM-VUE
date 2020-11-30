<template>
    <div class="container card p-5">
        <h2 class="ml-1">Login</h2>
        <form class="m-2" @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">

                <div class="errors" v-if="isError">
                    <small id="emailHelp" class="form-text text-danger" v-for="error in errors" >{{ error }}</small>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">

            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name :'Login',
        data(){
            return{
                email : '',
                password: '',
                isError: false,
                errors : []
            }
        },
        methods:{
               login(){
                   axios.get('/sanctum/csrf-cookie').then(response => {
                       axios.post('/login',
                           {
                               email : this.email,
                               password : this.password
                           }
                       ).then(res => {
                           axios.get('/api/user').then(ress => {
                               localStorage.setItem('isLoggedIn',true)
                               localStorage.setItem('loggedUser',JSON.stringify(ress.data))

                               this.$store.commit('setLoggedUser',ress.data)
                               this.$router.push('/dashboard');

                           });


                       }).catch(err => {
                           if(err){
                               console.log(err)
                               this.isError = true,
                               this.errors.push(err.message);
                           }
                       });
                   })
               }
        },
            mounted() {
                // if(this.$store.getters.getUser){
                //     this.$router.push('/dashboard')
                // }
            console.log('Login Component mounted.')
        }
    }
</script>
