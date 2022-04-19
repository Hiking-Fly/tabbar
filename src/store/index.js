import Vue from "vue";
import Vuex from "vuex";
import { INCREASE } from '@/store/mutations-types.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:100,
    },
    mutations:{
        [INCREASE](state){
            state.counter++
        },
        decrease(state){
            state.counter--
        },
        increase5(state,count){
            state.counter += count
        },
        updateInfo(state){
            state.info['address'] = '洛杉矶'  //添加了属性，但是不是响应式的，MV VM
            Vue.set(state.info,'address','洛杉矶') //添加属性，是响应式的
            Vue.delete(state.info,age)//响应式删除
        }
    },
    actions:{

    },
    getters:{//类似计算属性
        powCounter(state){
            return state.counter * state.counter
        }
    },
    modules:{

    }
})

export default store