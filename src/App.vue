<template>
  <NavComp/>
  
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
  background-color: #b7dfff66 !important;
  height: 100%;
  width: auto;
  padding: 40px 50px; 


}
</style>
