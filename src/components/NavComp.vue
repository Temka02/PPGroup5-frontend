<template>
  <div class="header">
    
    <div class="home">
      <router-link to="/" class="linkLogoHomePage"><img src="../assets/HomeLogo.svg"></router-link>
    </div>

    <div class="currrentPage">
      <h1></h1>
    </div>

    <div class="linkToLK">
        <router-link to="/lk" class="linkStyleLK">Личный кабинет</router-link>
        <router-link to="/lk" class="linkLogoLK"><img src="../assets/login.svg" alt="" class="authLogo"></router-link>
    </div>

  </div>   
</template>

<script>
export default {
  name: 'NavComp',
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,700&family=Ubuntu:ital,wght@0,500;0,700;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

.header{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 10vh;
  vertical-align: baseline;
  background-color: #f9f9f9;
  border: 3.5px solid #eeeeeedd;
}

.home{
  padding: 12px 8px 8px 8px;
}

.linkLogoHomePage img:hover{
  transform: scale(1.05);
  transition: transform 500ms ease; 
}

.linkToLK{
  display: flex;
  text-decoration:none;
  text-align: center;
  height: 75px;
  width: 320px;
  vertical-align: center;
}

.authLogo{
  height: 62px;
  width: 62px;;
}

.linkToLK .linkStyleLK{
  width: 255px
}

.linkStyleLK{
  padding: 23px 0px;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #000000;
  text-decoration:none;
  font-size: 26px;
}

.linkStyleLK:hover{
  transform: scale(1.01);
  transition: all 450ms ease;
  color: #540101; 
}

.linkLogoLK{
  padding: 7px 5px;
}

.linkLogoLK img:hover{
  transform: scale(1.01);
  transition: transform 500ms ease; 
}

</style>
