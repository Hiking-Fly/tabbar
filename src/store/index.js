import Vue from "vue";
import Vuex from "vuex";
import Promise from "core-js/fn/promise";
import { reject, resolve } from "promise"
import State from './state'
import Mutations from './mutations'
import Actions from './actions'
import Getters from './getters'
import ModuleA from './modules/modulsA'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: State,
    mutations: Mutations,
    actions:Actions,
    getters:Getters,
    modules:{
        a:ModuleA
    }
})

export default store