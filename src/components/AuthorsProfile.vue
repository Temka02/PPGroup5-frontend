<template>
    <div class="authorProfile">
        <div class="usersRoutes">
            <h1>Маршруты пользователя</h1>
                <div class="route">

                    <img src="../assets/bike.svg" alt="bike">

                    <div class="routeText">
                        <div class="distance">Расстояние: 2,2km</div>
                        <div class="time">Время: 01:12:54</div>
                        <div class="authorName"><router-link to="/AuthorsProfile">Автор: Артем Степанов</router-link></div>
                        <div class="rating">Оценка: 4,7 <img src="../assets/star.svg" alt="star"> </div>
                    </div>

                    <div id="linkToOpenMore">
                        <router-link to="/ViewRoute" class="routerLinkStyle">Подробности</router-link>
                        <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more"></router-link>
                    </div>

                </div>
                <div class="route">

                    <img src="../assets/bike.svg" alt="bike">

                    <div class="routeText">
                        <div class="distance">Расстояние: 2,2km</div>
                        <div class="time">Время: 01:12:54</div>
                        <div class="authorName"><router-link to="/AuthorsProfile">Автор: Артем Степанов</router-link></div>
                        <div class="rating">Оценка: 4,7 <img src="../assets/star.svg" alt="star"> </div>
                    </div>

                    <div id="linkToOpenMore">
                        <router-link to="/ViewRoute" class="routerLinkStyle">Подробности</router-link>
                        <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more"></router-link>
                    </div>

                </div>
                <div class="route">

                    <img src="../assets/bike.svg" alt="bike">

                    <div class="routeText">
                        <div class="distance">Расстояние: 2,2km</div>
                        <div class="time">Время: 01:12:54</div>
                        <div class="authorName"><router-link to="/AuthorsProfile">Автор: Артем Степанов</router-link></div>
                        <div class="rating">Оценка: 4,7 <img src="../assets/star.svg" alt="star"> </div>
                    </div>

                    <div id="linkToOpenMore">
                        <router-link to="/ViewRoute" class="routerLinkStyle">Подробности</router-link>
                        <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more"></router-link>
                    </div>

                </div>                                
        </div>
        <div class="usersInfo">
            <h1>Информация о пользователе</h1>
            <h3>ФИО пользователя: {{userFIO}}</h3>
            <h3>Общая дистанция маршрутов: {{totalDistance}}</h3>
            <h3>Средний рейтинг маршрутов: {{avgRating}} <img src="../assets/star.svg"></h3>
            <router-link to="/"><button class="returnBack" >Вернуться на главную страницу</button></router-link> 
        </div>
    </div>
    
</template>

<script>
    export default{
        name: 'AuthorsProfile',
        data(){
            return{
                    userFIO: 'Степанов Артем Андреевич',
                    totalDistance: '2,2km',
                    avgRating: '4,7'
                }
            }
        };
</script>

<style scoped>
.authorProfile{
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    background-color: #f1f1f1dd;
    padding-top: 35px;
    border: 3.5px solid #eeeeeedd;
    border-top: 0;
    display: flex;
}

.usersRoutes{
    width: 63%;
    height: 650px;
    background-color: #fcfcfc; 
    margin-left: 2%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    margin-bottom: 20px;
}

.usersRoutes h1{
    margin: 20px 0px 20px 0px;
    padding: 0px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 27px;
}

.route{
    display: flex;
    justify-content: space-between;
    border: 3px solid #c3c3c3;
    border-radius: 5px;
    margin: 10px auto 10px auto;
    height: 40px;
    width: 95%;
    padding: 12px 5px 8px 5px;
}

.routeText{
    background-color: #fcfcfc;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border-top:0 ;
    padding-left: 15px;
    width: 75%;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 16px;
}

.distance{
    padding: 8px 7px 8px 0px;
}

.rating{
    padding: 8px 7px 8px 0px;    
}

.rating img{
    width: 12.5px;
    height: 12.5px
}

.authorName{
    padding: 8px 7px 8px 0px;
    text-decoration: none;
    color: #000;
}

.authorName a{
    text-decoration: none;
    color: #000;
}

.time{
    padding: 8px 7px 8px 0px;
}

#linkToOpenMore{
    width: 16%;
    display: flex;
    padding: 7px 4px;
}

#linkToOpenMore img{
    padding: 0px 4px 0px 8px;
    width: 24px;
    height: 24px
}

.routerLinkStyle{
    text-align: right;
    text-decoration: none;
    color: #000;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
}

.usersRoutes p{
    text-align: center;
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;

}

.usersInfo{
    height: 650px;
    width: 33%;
    margin-right: 2%;
    background-color: #fcfcfc;
    border-left: 3.5px solid #bfbfbfdd;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    margin-bottom: 20px;
    padding-left: 10px
}

.usersInfo img{
    width: 16px;
    height: 16px
}

#linkToOpenMore img{
    padding: 0px 0px 0px 4px;
    width: 20px;
    height: 20px
}

.usersInfo h1{
    margin: 20px 0px 50px 0px;
    padding: 0px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 27px;
}

.usersInfo h3{
    margin: 25px 5px 45px 0px;
    padding: 0px;
    text-align: left;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 21px;
}

.returnBack{
    margin: 225px 0px 0px 190px;
    padding: 3px;
    border: 3px solid #35cafc;
    border-radius: 5px ;
    height: 60px;
    width:58%;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 18px;
    word-spacing: 2px;
    cursor: pointer;
    color: #2b2b2b;
    /* position: relative;
    left: 885px; */
}

.returnBack:hover{
    transition: all 0.4s ease;
    background-color: #35cafc;
    color: #f0efef;
    border: 0;
}

</style>