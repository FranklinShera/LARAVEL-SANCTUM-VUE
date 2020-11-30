import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const availableUser = localStorage.getItem('loggedUser');

export  default new Vuex.Store({

    state: {
        loggedUser: (availableUser) ? JSON.parse(availableUser) : null
    },
    getters:{
        getUser(state){
            return state.loggedUser;
        }
    },
    mutations: {
        setLoggedUser(state,user){
            state.loggedUser = user;
        }
    },
    actions:{

    }
})
