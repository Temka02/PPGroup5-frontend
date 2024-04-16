<template>
    <div class="ViewRoute">
        
        <div class="imageOfRoute">
            <h1>Маршрут ...</h1>
            <img src="../assets/map1.jpg" alt="маршрут на карте">
        </div>
        <div class="detailsOfRoute">
            <h3>Автор:</h3>
            <h3>Дистанция:</h3>
            <h3>Оценка:</h3>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ViewRoute'
    }
</script>

<style scoped>
.ViewRoute{
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
    display: flex;
    justify-content: space-around;
}

.ViewRoute h1{
    margin: 0px 0px 20px 0px;
}

.imageOfRoute{
    height: 700px;
    width: 60%;
    margin-left: 30px;
}

.imageOfRoute img{
    height: 450px;
    width: 884px;
    border: 2px solid #d6d6d6dd;
    border-radius: 5px;
}

.detailsOfRoute{
    margin-right: 30px;
    margin-top: 56px;
    padding-top: 10px;
    height: 440px;
    width: 30%;
    background-color: #fff;
    border-radius: 9px;
    border: 3px solid #d6d6d6dd
}

.detailsOfRoute h3{
    margin: 0px 10px 10px 8px;
}


</style>