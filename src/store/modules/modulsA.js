export default {
    state:{
        name:"LiSi"
    },
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    actions:{},
    getters:{
        fullname(state){
            return state.name+"fullname"
        },
        fullname2(state,getters){
            return getters.fullname+"fullname2"
        },
        fullname3(state,getters,rootState){
            return getters.fullname2 + rootState.counter
        }
    }
}