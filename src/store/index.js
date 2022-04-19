import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:100,
    },
    mutations:{
        increase(state){
            state.counter++
        },
        decrease(state){
            state.counter--
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
})

export default store