<template>
    <div class="mainPage">
        
        <!-- Страница при выполненной авторизации -->
        <div v-if="this.authStatus">
            <div v-for="route in routes" :key="route.id">
                <div class="route">

                        <img src="../assets/bike.svg" alt="bike">

                        <div class="routeText">
                            <div class="distance">Расстояние: {{route.distance}}km</div>
                            <div class="time">Время: {{route.users_travel_time}}</div>
                            <div class="authorName"><router-link to="/AuthorsProfile" @click="saveUserID(Number(route.user_id))">Автор: {{ route.user_name }}</router-link></div>
                            <div class="rating">
                                <div v-if="route.avg_estimation === null">
                                    Оценки нет
                                </div>
                                <div v-else>
                                    Оценка: {{route.avg_estimation}} <img src="../assets/star.svg" alt="star">
                                </div> 
                            </div>
                        </div>

                        <div id="linkToOpenMore">
                            <router-link to="/ViewRoute" class="routerLinkStyle" @click="saveRouteID(Number(route.route_id)), saveUserID(Number(route.user_id))">Посмотреть подробности</router-link>
                            <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more" @click="saveRouteID(Number(route.route_id)), saveUserID(Number(route.user_id))"></router-link>
                        </div>

                    </div>
            </div>
        </div>

        <!-- Страница для неавторизованных -->
         <div v-else>
            <div v-for="route in routes" :key="route.id">
                <div class="route">

                    <img src="../assets/bike.svg" alt="bike">

                    <div class="routeText">
                        <div class="distance">Расстояние: {{route.distance}}km</div>
                        <div class="time">Время: {{route.users_travel_time}}</div>
                        <div class="authorName"><router-link to="/AuthorsProfile" @click="saveUserID(Number(route.user_id))">Автор: {{ route.user_name }}</router-link></div>
                        <div class="rating">
                            <div v-if="route.avg_estimation === null">
                                Оценки нет
                            </div>
                            <div v-else>
                                Оценка: {{route.avg_estimation}} <img src="../assets/star.svg" alt="star">
                            </div> 
                        </div>
                    </div>

                    <div id="linkToOpenMore">
                        <router-link to="/lk" class="routerLinkStyle" @click="saveRouteID(Number(route.route_id)), saveUserID(Number(route.user_id))">Посмотреть подробности</router-link>
                        <router-link to="/lk"><img src="../assets/more.svg" alt="more" @click="saveRouteID(Number(route.route_id)), saveUserID(Number(route.user_id))"></router-link>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'MainPage',

        data(){
            return{
                routes: [],
                authStatus: false
            }
        },

        created(){
            this.getRoutes()
            if (localStorage.getItem('isAuthorized') === 'true'){
                this.authStatus = true
            }   
        },

        methods: {

            // Получение 15 последних маршрутов
            async getRoutes(){
                try {
                    console.log('Идет загрузка')
                    const res = await fetch('http://10.147.17.88:8000/')
                    console.log('Загрузка продолжается')
                    const data = await res.json()
                    console.log(data)
                    if (res.status === 200 || res.status === 201){
                        this.routes= data.data
                        console.log('Загрузка прошла успешно')
                        console.log(this.routes);
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            // Сохранение в локальном хранилище переменной routeID для дальнейших запросов
            saveRouteID(el){
                localStorage.setItem('routeID', el)
            },

            // Сохранение в локальном хранилище переменной otherUserID для дальнейших запросов
            saveUserID(el){
                localStorage.setItem('otherUserID', el)
            }
        }
  }

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

.mainPage{
    /* margin-top: 20px; */
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background-color: #f1f1f1dd;
    border: 3.5px solid #eeeeeedd;
    border-top: 0;
    padding-top: 15px;
}

.mainPage h1{
    padding: 0px;
    text-align: center;
    width: 100%;
    margin: 0px 0px 15px 0px;
    font-size: 27px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    padding-top: 25px
}

.filters{
    display: flex;
    justify-content: space-around;
    border-radius: 9px;
    height: 67px;
    width: 100%;
    padding: 0px 0px 10px 0px
}

.filters div{
    width: 32%;
}

.selectSort{
    width: 100%;
    height: 48px;
    background-color: #fff;
    border-radius: 5px;
    border: 3px solid #dddddd;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;
    padding: 5px 7px;
    color: #2f2f2f;
}


.routes{
    width: 90%;
    margin: 0px auto 20px auto;
    background-color: #fff;
    border-radius: 10px;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
}
.route{
    display: flex;
    justify-content: space-between;
    border: 3px solid #c3c3c3;
    border-radius: 5px;
    margin: 0px auto 15px auto;
    height: 40px;
    width: 80%;
    padding: 10px 5px 10px 15px;
    background-color: #fff;
}

.routeText{
    background-color: #fcfcfc;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 3px solid #c3c3c3;
    border-top:0 ;
    padding-left: 40px;
    width: 60%;
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
    width: 35%;
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
    width: 29%;
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








</style>