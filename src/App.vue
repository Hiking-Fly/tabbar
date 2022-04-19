<template>
  <div id="app">
    <router-view/>
    <h3>hello-vuex的counter</h3>
    <hello-vuex/>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h3>直接获取store.state的counter</h3>
    {{$store.state.counter}}
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/MainTabBar.vue"
import HelloVuex from "views/HelloVuex"
export default{
  name:"App",
  components: {
   MainTabBar,
   HelloVuex
  },
  methods:{
    add(){
      this.$store.commit("increase")
    },
    sub(){
      this.$store.commit("decrease")
    }
  }
}
</script>

<style>
  @import url("assets/css/base.css");
</style>
