require('./bootstrap');

window.Vue = require('vue');


Vue.component('app-home', require('./Home.vue').default);


import {routes} from './routes.js';

import VueRouter from 'vue-router'
Vue.use(VueRouter);



const router = new VueRouter({
    routes,
    mode:'history'
})



import store from './store';



const app = new Vue({
    el: '#app',
    router,
    store
});
