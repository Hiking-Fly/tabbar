import Vue from "vue";
import Vuex from "vuex";
import Promise from "core-js/fn/promise";
import { INCREASE } from '@/store/mutations-types.js'
import { reject, resolve } from "promise"

Vue.use(Vuex)
const moduleA= {
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
            state.counter+=10
            // state.info['address'] = '洛杉矶'  //添加了属性，但是不是响应式的，MV VM
            // Vue.set(state.info,'address','洛杉矶') //添加属性，是响应式的
            // Vue.delete(state.info,age)//响应式删除
            // setTimeout(()=>{
            //     state.info.name = 'codewhy'
            // },1000)//异步操作，不会被devtools记录，使用Action进行异步操作
        }
    },
    actions:{
        aUpdateInfo(context,payload){//异步操作
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    resolve('返回的信息')
                }, 1000)
            })
           
        }
    },
    getters:{//类似计算属性
        powCounter(state){
            return state.counter * state.counter
        }
    },
    modules:{
        a:moduleA
    }
})

export default store