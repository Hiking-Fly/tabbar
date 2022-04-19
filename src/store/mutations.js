import { INCREASE } from '@/store/mutations-types.js'
export default {
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
}