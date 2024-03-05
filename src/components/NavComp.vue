<template>
  <div class="containerNav">
    <nav>
      <router-link to="/" class="linkStyle">Мой профиль</router-link>
      <router-link to="/" class="linkStyle">Мой профиль</router-link>
      <router-link to="/" class="linkStyle">Мой профиль</router-link>
      <router-link to="/" class="linkStyle">Мой профиль</router-link>
      <!-- <router-link to="/test" class="linkColor">Загрузка данных</router-link> -->
      </nav>
  </div>
</template>

<script>
export default {
  name: 'NavComp',
  props: {
  }
}
</script>


<style scoped>
  .containerNav{
    height: 70px;
    display: flex;
    justify-content: center;
}
nav{
    height: 100%;
    width: 800px;
    display: flex;
    justify-content:space-between;
    margin: 25px;
    font-size: 1.2em;
    font-weight: bold;
    font-family: cursive;
}

.linkStyle{
    color: black;
    text-decoration:none;
}
.router-link-exact-active{
    color: brown;
}
</style>
