<template>
  <div id="app">
    <router-view/>
    <h3>hello-vuex的counter</h3>
    <hello-vuex/>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="add5(5)">+5</button>
    <button @click="update">异步+10</button>
    <h3>直接获取store.state的counter</h3>
    {{$store.state.counter}}
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/MainTabBar.vue"
import HelloVuex from "views/HelloVuex"
import { INCREASE } from '@/store/mutations-types.js'
export default{
  name:"App",
  components: {
   MainTabBar,
   HelloVuex
  },
  methods:{
    add(){
      this.$store.commit(INCREASE)
    },
    sub(){
      this.$store.commit("decrease")
      
    },
    add5(count){
      this.$store.commit("increase5",count)
      // this.$store.commit({
      //   type:"increase5",
      //   count,
      // }) //另一种提交方式，提交过去的参数会是对象
    },
    update(){
      this.$store.dispatch('aUpdateInfo',"携带的信息").then(res => {
        console.log("里面提交了")
        console.log(res)
      })
    }
  }
}
</script>

<style>
  @import url("assets/css/base.css");
</style>
