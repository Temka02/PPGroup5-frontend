<template>
  <NavComp/>
  <hr>
  <router-view></router-view>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
