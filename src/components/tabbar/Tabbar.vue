<template>
     <div id="tab-bar">
     <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
  data () {
    return {
    };
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color:#f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(10, 10, 10, .3);
  }
 
</style>