import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const availableUser = localStorage.getItem('loggedUser');

export  default new Vuex.Store({

    state: {
        loggedUser: (availableUser) ? JSON.parse(availableUser) : null,
        isLoading: false
    },
    getters:{
        getUser(state){
            return state.loggedUser;
        }
        ,
        getLoader(state){
            return state.isLoading;
        }
    },
    mutations: {
        setLoggedUser(state,user){
            state.loggedUser = user;
        },
        setLoader(state,loadingState){
            state.isLoading = loadingState;
        }
    },
    actions:{

    }
})
