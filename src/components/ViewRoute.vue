<template>
    <div class="ViewRoute">
        
         <div class="ViewInfo">
            
            <div class="imageOfRoute">
                <YandexMap></YandexMap>
            </div>

            <div class="detailsOfRoute">
                <h3>Дистанция: {{ this.routeINFO.distance }}km</h3>
                <h3>Время: {{ this.routeINFO.users_travel_time }}</h3>            
                <h3><router-link to="/AuthorsProfile" @click="saveUserID(Number(this.otherUserId))">Автор: {{ this.routeINFO.user_name }}</router-link></h3>
                <div class="rating">
                            <div v-if="this.routeINFO.avg_estimation === null">
                                <h3>Пока никто не ставил оценку маршруту</h3>
                            </div>
                            <div v-else>
                                <h3>Рейтинг маршрута:  {{ this.routeINFO.avg_estimation }}<img src="../assets/star.svg"></h3>
                            </div> 
                        </div>
                
                <div class="estimate" v-if="!(isConfirmedEst)">
                    <label for="estimationInput">Ваша оценка?</label>
                    <select id="estimationInput"
                            v-model.trim="this.estimation">
                        <option value="" disabled></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button class="estimateBtn" @click="estimateBtn()">Подтвердить оценку</button>
                </div>
                <div class="urEst" v-else>
                    <h3>Ваша оценка {{ this.estimation }}</h3>
                </div>
            </div>
           
        </div>

        <router-link to="/" id="returnHome"><button class="returnBack" >Вернуться на главную страницу</button></router-link> 
        
    </div>
    
</template>

<script>
import YandexMap from './YandexMap.vue'

    export default{

        name: 'ViewRoute',

        components: {
            YandexMap
        },

        data(){
            return{
                routeINFO: { 
                },
                responseEstimation: '',
                estimation: '',
                currentUrl: `http://10.147.17.60:8000/route/${this.routeId}`,
                routeId: '',
                userInfo: '',
                userID: '',
                otherUserId: '',
                isConfirmedEst: false
            }
        },

        created(){
            this.otherUserId = localStorage.getItem('otherUserID')
            this.userInfo = JSON.parse(localStorage.getItem('user'))
            this.userID = Number(this.userInfo.data.user.id)
            this.routeId = Number(localStorage.getItem('routeID'))
            console.log(this.userID);
            this.getRouteInfo()
            this.getEstimation()
            console.log('userID - ' + this.userID)
            
        },

        methods: {

            //Сохранение переменной otherUserId в локальном хранилище для дальнейшего испольования
            saveUserID(el){
                localStorage.setItem('otherUserID', el)
            },   

            //Отправка на сервер поставленной оценки, последующее ее сохранение и отображение на странице
            async sendEstimate(){
                try {
                    const response = await fetch(`http://10.147.17.88:8000/routes/${this.routeId}/estimation?user_id=${this.userID}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            route_id: Number(this.routeId),
                            estimation: Number(this.estimation),
                            comment: null
                        })
                        })
                    const result = await response.json()
                    if (response.status === 200 || response.status === 201){
                        console.log('sendEstimate() - Успешно');
                        console.log('Я поставил оценку - ' + this.estimation);
                        this.getRouteInfo()
                    } else{
                        alert('Ошибка! Перепроверьте введеные данные')
                        this.errors = result
                        console.error(result)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Получение информации о просматриваемом маршруте
            async getRouteInfo(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/route/${this.routeId}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.routeINFO = data.data.route
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Получение информации об поставленной данному маршруту оценке
            async getEstimation(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/routes/${this.routeId}/estimation?user_id=${this.userID}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.responseEstimation = data
                        this.estimation = this.responseEstimation.data.my_estimation_value
                        if (this.estimation === 1 || this.estimation === 2 || this.estimation === 3 || this.estimation === 4 || this.estimation === 5 ){
                            this.isConfirmedEst = true
                        }
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Подтверждение отправки оценки на сервер
            estimateBtn(){
                this.sendEstimate()
                this.isConfirmedEst = true
            }   
        },
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
    padding-top: 30px;
    border: 3.5px solid #eeeeeedd;
    border-top: 0;
}

.ViewInfo{
    display: flex;
    justify-content: space-between;
}

.ViewRoute #returnHome{
    height: 60px;
    width:28%;
    margin-left: 66.1%;
}

.ViewRoute h1{
    margin: 0px 0px 20px 0px;
}

.imageOfRoute{
    height: 464.8px;
    width: 62%;
    margin-left: 30px;
    border: 3px solid #d6d6d6dd;
    border-radius: 5px;
}

.imageOfRoute .__ymap{
    height: 464.5px !important;
    width: 100% !important;
}

.detailsOfRoute{
    margin-right: 30px;
    padding-top: 25px;
    height: 440px;
    width: 31.5%;
    background-color: #fff;
    border-radius: 9px;
    border: 3px solid #d6d6d6dd
}

.detailsOfRoute img{
    width: 16px;
    height: 16px
}

.detailsOfRoute h3{
    margin: 0px 10px 30px 18px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 21px;

}

.detailsOfRoute a{
    text-decoration: none;
    color: #000;
    text-align: left;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 21px;
}

.returnBack{
    margin-top: 8px;
    margin-bottom: 15px;
    padding: 3px;
    border: 3px solid #35cafc;
    border-radius: 5px ;
    height: 60px;
    width:18%;
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

#addBtn{
    width: 45%;
    height: 55px;
    padding: 5px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 16px;
    margin: 10px;
    position: relative;
    top: 135px;
    background-color: #b8fdd4;
    border: 2px solid #464646;
    border-radius: 8px;
    cursor: pointer;
}

#removeBtn{
    visibility: hidden;
}

.hideAddBtn{
    visibility: hidden;
}

.hideRemoveBtn{
    visibility: visible !important;
    width: 49% ; 
    height: 55px;
    padding: 5px;
    font-family: "Roboto Slab", serif ;
    font-optical-sizing: auto ;
    font-weight: 600 ;
    font-size: 16px ;
    position: relative ;
    top: 135px ;
    background-color: #ff8383ea ;
    border: 2px solid #efefef ;
    border-radius: 8px ;
    cursor: pointer ;
}

.estimate{
    font-family: "Roboto Slab", serif ;
    font-optical-sizing: auto ;
    font-weight: 600 ;
    font-size: 20px ;
    margin: 25px 17px ;
}

.estimate select{
    font-family: "Roboto Slab", serif ;
    font-optical-sizing: auto ;
    font-weight: 700 ;
    font-size: 15px ;
    margin-left: 10px;
    width: 50px;
    height: 25px;
    text-align: center;
    border: 2.5px solid #35cafc;
    border-radius: 4px;
}

.estimateBtn{
    display: block;
    width: 30%;
    height: 55px;
    padding: 5px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 16px;
    margin: 10px;
    background-color: #b8fdd4;
    border: 2px solid #464646;
    border-radius: 8px;
    cursor: pointer;
}

.confirmedEst{
    display: none !important;
}

.responses{
    display: flex;
    justify-content: space-between;
}

.urEst{
    display: block;
}

.urEst h3{
    margin-top: 100px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: 35px;
    color: #2483a2;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>