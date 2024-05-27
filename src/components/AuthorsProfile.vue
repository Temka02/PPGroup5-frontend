<template>
    <div class="authorProfile">

        <div class="usersRoutes">

            <h1>Маршруты пользователя</h1>
            
                <div class="existRoutes"  v-if="isExistRoutes">
                    <div v-if="(this.currentAuthStatus)">
                        <div v-for="route in userRoutes" :key="route.id">
                            <div class="route">

                                <img src="../assets/bike.svg" alt="bike">

                                <div class="routeText">
                                    <div class="distance">Расстояние: {{ route.distance }}km</div>
                                    <div class="time">Время: {{ route.users_travel_time }}</div>
                                    <div class="authorName">Автор: {{ route.user_name }}</div>

                                    <div v-if="route.avg_estimation === null" class="lackRating">Оценки нет</div>
                    
                                    <div v-else class="rating"><p>Оценка: {{route.avg_estimation}} </p> <img src="../assets/star.svg" alt="star"></div> 
                                </div>
                                
                                <div id="linkToOpenMore">
                                    <router-link to="/ViewRoute" class="routerLinkStyle" @click="saveRouteID(Number(route.route_id))">Подробности</router-link>
                                    <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more" @click="saveRouteID(Number(route.route_id))"></router-link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <div v-for="route in userRoutes" :key="route.id">
                            <div class="route">

                                <img src="../assets/bike.svg" alt="bike">

                                <div class="routeText">
                                    <div class="distance">Расстояние: {{ route.distance }}km</div>
                                    <div class="time">Время: {{ route.users_travel_time }}</div>
                                    <div class="authorName">Автор: {{ route.user_name }}</div>

                                    <div v-if="route.avg_estimation === null" class="lackRating">Оценки нет</div>
                    
                                    <div v-else class="rating"><p>Оценка: {{route.avg_estimation}} </p> <img src="../assets/star.svg" alt="star"></div> 
                                </div>
                                
                                <div id="linkToOpenMore">
                                    <router-link to="/lk" class="routerLinkStyle" @click="saveRouteID(Number(route.route_id))">Подробности</router-link>
                                    <router-link to="/lk"><img src="../assets/more.svg" alt="more" @click="saveRouteID(Number(route.route_id))"></router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="NotExistRoutes" v-else>
                    <h1>Пользователь пока не добавил маршруты</h1>
                </div>
                                                
        </div>
        
        <div class="usersInfo">
            <h1>Информация о пользователе</h1>
            <h3>ФИО пользователя:{{ this.otherUserInfo.surname }} {{ this.otherUserInfo.name }} {{ this.otherUserInfo.patronymic }}</h3>
            <h3>Общая дистанция маршрутов: {{this.otherUserRoutesInfo.all_distance}}km</h3>
            <h3>Общая длительность маршрутов: {{this.otherUserRoutesInfo.all_travel_time}}</h3>
            <div v-if="this.otherUserRoutesInfo.all_avg_estimations === null" class="lackRating">
                Средний рейтинг маршрутов: Оценки нет
            </div>
            <div v-else class="estimation">
                <h3>Средний рейтинг маршрутов: {{this.otherUserRoutesInfo.all_avg_estimations}}<img src="../assets/star.svg" alt="star"></h3>
            </div> 
        </div>
    </div>
    
</template>

<script>
    export default{

        name: 'AuthorsProfile',

        data(){
            return{
                    userRoutes: [],
                    userName: '',
                    userSurname: '',
                    userPatronymic: '',
                    totalDistance: '2,2km',
                    avgRating: '4,7',
                    isExistRoutes: true,
                    otherUserId: '',
                    otherUserInfo: '',
                    otherUserRoutesInfo: '',
                    currentAuthStatus: false
                }
        },

        created(){
            if (localStorage.getItem('isAuthorized') === 'true'){
                this.currentAuthStatus = true
            } 
            this.otherUserId = Number(localStorage.getItem('otherUserID'))
            console.log(this.otherUserId)
            this.getUsersRoutes()
            this.getOtherUserInfo()
        },

        methods: {

            //Получение маршрутов пользователя
            async getUsersRoutes(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/users/${this.otherUserId}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.userRoutes = data.data.routes
                        console.log(this.userRoutes)
                        console.log('getUsersRoutes() - Успешно')
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Получение информации об авторе маршрута
            async getOtherUserInfo(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/users/${this.otherUserId}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.otherUserInfo = data.data.user,
                        this.otherUserRoutesInfo = data.data
                        if (this.otherUserRoutesInfo.routes === null){
                            this.isExistRoutes = false
                        }
                        console.log(this.otherUserInfo)
                        console.log(this.otherUserRoutesInfo)
                        console.log('getOtherUserInfo() - Успешно')
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Сохранение в локальном хранилище переменной routeID для дальнейего использования
            saveRouteID(el){
                localStorage.setItem('routeID', el)
            }, 
        }
    }
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

.route .routeText .rating{
    display: flex
}

.route .routeText .rating p{
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 16px;
    margin: 0px
}

.route .routeText .rating img{
    display: block;
    margin-top: 3px;
    width: 15px;
    height: 15px
}

.route .routeText .lackRating{
    margin-top: 8px;
}

.usersInfo .lackRating{
    margin: 25px 5px 45px 0px;
    padding: 0px;
    text-align: left;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 21px;
}

.usersInfo .estimation{
    display: flex;
}

.usersInfo .estimation p{
    margin: 25px 5px 45px 0px;
    padding: 0px;
    text-align: left;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 21px;
}

.NotExistRoutes h1{
    margin-top: 25% !important;
    font-size: 35px !important;
    font-weight: 800 !important;
    color: rgb(94, 94, 94) !important;
}

</style>