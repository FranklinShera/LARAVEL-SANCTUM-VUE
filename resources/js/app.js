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



function isLoggedIn(){
    return localStorage.getItem('isLoggedIn');
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                path: '/user-login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.requiresGuest)) {
        // this route requires guest, check if logged in
        // if not, redirect to dashboard page.
        if (isLoggedIn()) {
            next({
                path: '/dashboard',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})






import store from './store';



const app = new Vue({
    el: '#app',
    router,
    store
});
