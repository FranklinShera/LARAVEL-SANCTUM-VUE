<template>
    <div class="container card p-5"  :class="{ 'loading': this.$store.getters.getLoader }">
        <h2 class="ml-1">Register</h2>
        <form class="m-2">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" v-model="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" v-model="confirm" class="form-control" id="exampleInputConfirmPassword1" placeholder="Password">
            </div>


            <button type="submit" class="btn btn-primary" @click.prevent="registerUser">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name :'Register',
        data(){
            return{
                name: '',
                email: '',
                password: '',
              confirm : '',
            }
        },
        methods:{
               registerUser(){
                   this.$store.commit('setLoader', true);

                   axios.get('/sanctum/csrf-cookie').then(response => {
                       axios.post('/register',
                           {
                               name : this.name,
                               email : this.email,
                               password : this.password,
                               password_confirmation: this.confirm
                           }
                       ).then(res => {
                           axios.get('/api/user').then(ress => {
                               localStorage.setItem('isLoggedIn',true)
                               localStorage.setItem('loggedUser',JSON.stringify(ress.data))

                               this.$store.commit('setLoggedUser',ress.data)

                               this.$store.commit('setLoader', false);

                               this.$router.push('/dashboard');

                           });


                       }).catch(err => {
                           if(err){
                               console.log(err)
                               this.isError = true
                               this.$store.commit('setLoader', false);
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
            console.log('Register Component mounted.')
        }
    }
</script>

<style>
    .loading{
        color: transparent;
        text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
</style>
