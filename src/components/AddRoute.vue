<template>
    <div class="AddRoute">
        <div class="title">
            <h1>Создание маршрута</h1>
            <router-link to="/lk"><button>Вернуться в профиль</button></router-link>
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script>
    export default{
        name: 'AddRoute'
    }
</script>

<style scoped>
    .AddRoute{
        height: 100%;
        width: 100%;
        font-size: 14px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        background-color: #f1f1f1dd;
        padding-top: 55px;
        border: 3.5px solid #eeeeeedd;
        border-top: 0;
    }
    .AddRoute .title{
        height: 50px;
        display: flex;
        justify-content: space-between;
        margin: 0px 40px 30px 40px;
        vertical-align: middle;
    }

    .AddRoute .title h1{
        margin: 0px;
        padding: 0px;
    }

    .AddRoute .title button{
        background-color: #fff;
        width: 220px;
        padding: 8px 10px;
        height: 50px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-size: 16px;
        border-radius: 6px;
        border: 3px solid #623d3d;
        cursor: pointer;
    }

    .main{
        width: 95%;
        margin: 0px 2% 40px 2%;
        height: 500px;
        background-color: #fff;
        border-radius: 14px;
        
    }





</style>