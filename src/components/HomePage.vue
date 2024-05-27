<template>
    <div class="homePage">

        <!-- Страница для авторизованных -->
        <div v-if="isAuth" class="authorized">
            <h1>Личные данные</h1> 
            
            <div class="homeInfo">

                <div class="selectedContent">
                    <div v-if="isActiveMRo" class="ActiveMRo">
                        <div class="lackOfRoutes" v-if="isLackOfRoutes">
                            <h1>Пока нет маршрутов</h1>
                        </div>
                        <div class="usersRoutes" v-else>
                            <h1>Ваши маршруты:</h1>

                            <div class="myCurrentRoutes" v-for="route in myRoutes" :key="route.id">
                                <div class="route">

                                    <img src="../assets/bike.svg" alt="bike">

                                    <div class="routeText">
                                        <div class="distance">Расстояние: {{ route.distance }}</div>
                                        <div class="time">Время: {{ route.users_travel_time }}</div>
                                        <div class="authorName"><router-link to="/AuthorsProfile" @click="saveUserID(Number(route.user_id))">Автор: {{this.userData.surname}} {{this.userData.name}}</router-link></div>
                                        <div v-if="route.avg_estimation === null" class="lackRating">
                                            Оценки нет
                                        </div>
                                        <div v-else class="rating">
                                            <p>Оценка: {{route.avg_estimation}} </p> <img src="../assets/star.svg" alt="star">
                                        </div> 
                                    </div>

                                    <div id="linkToOpenMore">
                                        <router-link to="/ViewRoute" class="routerLinkStyle" @click="saveRouteID(Number(route.route_id))" >Подробности</router-link>
                                        <router-link to="/ViewRoute" @click="saveRouteID(Number(route.route_id))"><img src="../assets/more.svg" alt="more"></router-link>
                                    </div>                            
                                </div>
                            </div>  
                            
                        </div>
                    </div>
                    <div v-else class="ActivePD">

                        <div class="FIO">

                            <div class="firstName">
                                <label for="userFirstName" class="labelStyle">Имя</label>
                                <input type="text" 
                                       :placeholder="setName"
                                       v-model.trim="userData.name"  
                                       id="userFirstName" 
                                       class="currentInfo"
                                       disabled>
                            </div>

                            <div class="lastName" >
                                <label for="userLastName" class="labelStyle">Фамилия</label>
                                <input type="text" 
                                       :placeholder="setSurname"
                                       v-model.trim="userData.surname"  
                                       id="userLastName" 
                                       class="currentInfo" 
                                       disabled>
                            </div>

                            <div class="fatherName" >
                                <label for="userFatherName" class="labelStyle">Отчество</label>
                                <input type="text" 
                                       :placeholder="setFatherName"
                                       v-model.trim="userData.patronymic"  
                                       id="userFatherName"
                                       class="currentInfo" 
                                       disabled>
                            </div>

                        </div>

                        <div class="extraInformation">

                            <div class="userEmail">
                                <label for="Email" class="labelStyle">E-mail</label>
                                <input type="email" 
                                       :placeholder="setEmail"
                                       v-model.trim="userData.email" 
                                       id="Email" 
                                       class="currentInfo" 
                                       disabled>
                            </div>

                            <div class="phoneNumber" >
                                <label for="phone" class="labelStyle">Телефон</label>
                                <input type="tel" 
                                       id="phone"
                                       @blur="v$.userData.telephone_number.$touch()"
                                       v-model.trim="userData.telephone_number"
                                       :class="{ 'invalidInput': v$.userData.telephone_number.$invalid}" 
                                       :placeholder="setPhoneNumber" 
                                       class="currentInfo" 
                                       disabled>
                            </div>
                            
                            <div class="birthDate" >
                                <label for="birth" class="labelStyle">Дата рождения</label>
                                <input type="date" 
                                       id="birth"
                                       v-model.trim="userData.birth" 
                                       max="2010-01-01" 
                                       min="1900-01-01" 
                                       class="currentInfo" 
                                       disabled 
                                       :placeholder="setBirth">
                            </div>

                        </div>

                        <div class="cityAndGender">

                            <div class="city"> 
                                <label for="userCity" class="labelStyle">Ваш город</label>
                                <select class="selectCity" 
                                        id="userCity"
                                        v-model.trim="userData.location"
                                        disabled>
                                    <option value="" disabled>Выберите город:</option>
                                    <option value="astrahan">Астрахань</option>
                                    <option value="volgograd">Волгоград</option>
                                    <option value="voronezh">Воронеж</option>
                                    <option value="ekaterinburg">Екатеринбург</option>
                                    <option value="kazan">Казань</option>
                                    <option value="krasnodar">Краснодар</option>
                                    <option value="krasnoyarsk">Красноярск</option>
                                    <option value="moscow" selected>Москва</option>
                                    <option value="nizhiyNovgorod">Нижний Новгород</option>
                                    <option value="novosibirsk">Новосибирск</option>
                                    <option value="omsk">Омск</option>
                                    <option value="perm">Пермь</option>
                                    <option value="rostov">Ростов-на-Дону</option>
                                    <option value="samara">Самара</option>
                                    <option value="st-petersburg">Санкт-Петербург</option>
                                    <option value="ufa">Уфа</option>
                                    <option value="chelyabinsk">Челябинск</option>  
                                </select>
                            </div>

                            <div class="gender">
                                <label for="userGender" class="labelStyle">Пол</label>
                                <select class="selectGender" 
                                        id="userGender"
                                        v-model.trim="userData.sex"
                                        disabled>
                                    <option value="" disabled>Выберите пол:</option>
                                    <option value="male" :selected="setGenderMale">Мужской</option>
                                    <option value="female" :selected="setGenderFemale">Женский</option>
                                </select>
                            </div>

                        </div>

                        <div class="changeInfo">

                            <div class="changeButton">
                                <button :class="{ activeChanging: isChanging } " @click="newChanges()">Изменить данные</button>
                            </div>

                            <div class="saveChangesButton">
                                <button :disabled="disabledBtn3" :class="{ activeSaving: isSaving }" @click="saveNewChanges()" >Сохранить изменения</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="contentSelection">
                    <h2>Личный кабинет</h2>
                    <button class="staticButton" :class="{ activeButton: isActivePD }" @click="choosePD()">Личные данные</button>
                    <button class="staticButton" :class="{ activeButton: isActiveMRo }" @click="chooseMRotes()">Мои маршруты</button>
                    <button @click="getToken()" class="getTokenBtn">Получить мобильный токен</button>
                    <button @click="goOut()" class="logOutBtn">Выйти из аккаунта</button>
                </div>

            </div>
        </div>

        <!-- Страница для неавторизованных -->
        <div v-else class="unauthorized">
            <h1>Вы не авторизованы</h1>
            <router-link to="/Authorization" class='linkToAuth'><h2>Перейти к авторизации</h2></router-link>
        </div>

    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, minLength, maxLength } from '@vuelidate/validators'
import { isPhone } from "../validators/phoneValidate";

    export default {
        name: "HomePage",

        setup () {
            return { v$: useVuelidate() }
        },

        data() {
            return{
                currentUser: [],
                userData: {
                    email: 'Введите e-mail',
                    id: '',
                    location: '',
                    name: 'Введите имя',
                    patronymic: 'Введите отчество',
                    sex: '',
                    surname: 'Введите фамилию',
                    telephone_number: 'Введите номер телефона',
                    token_mobile: '',
                    birth: ''              
                },
                myRoutes: [],
                isMale: true, 
                isFemale: true,
                isAuth: false,
                isChanging: false,
                isSaving: true,
                isActivePD: true,
                isActiveMRo: false,
                isLackOfRoutes: false,
                myUserID: -1
            }
        },

        created(){
            this.currentUser = JSON.parse(localStorage.getItem('user'))
            this.userData.token_mobile =  this.currentUser.data.user.token_mobile
            if (localStorage.getItem('isAuthorized') === 'true'){
                this.isAuth = true
                this.userData.id = Number(this.currentUser.data.user.id)
                this.userData.surname = this.currentUser.data.user.surname
                this.userData.name = this.currentUser.data.user.name
                this.userData.patronymic = this.currentUser.data.user.patronymic
                this.userData.telephone_number = this.currentUser.data.user.telephone_number
                this.userData.email = this.currentUser.data.user.email
                this.userData.location = this.currentUser.data.user.location
                this.userData.sex = this.currentUser.data.user.sex
                this.userData.birth = this.currentUser.data.user.birth
                
            }
            console.log(this.userData.id)
            this.getMyRoutes()
        },

        computed: {
            setSurname(){
                return this.userData.surname
            },
            setName(){
                return this.userData.name
            },
            setFatherName(){
                return this.userData.patronymic
            },
            setPhoneNumber(){
                return this.userData.telephone_number
            },
            setEmail(){
                return this.userData.email
            },
            setCity(){
                return this.userData.location
            },
            setBirth(){
                return this.birth
            },
            setGenderMale(){
                return this.ismale
            },
            setGenderFemale(){
                return this.isFemale
            },
            disabledBtn3(){
                return this.v$.userData.telephone_number.$invalid
            }
        },

        methods: {
            //Сохранение в локальном хранилище переменной routeID для дальнейших запросов
            saveRouteID(el){
                localStorage.setItem('routeID', el)
            },

            //Сохранение в локальном хранилище переменной otherUserID для дальнейших запросов
            saveUserID(el){
                localStorage.setItem('otherUserID', el)
            }, 

            //Отправка данных на сервер, их сохранение и отображение в личном кабинете
            async saveChanges(){
                try {
                    const response = await fetch('http://10.147.17.88:8000/me/profile', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            id: Number(this.currentUser.data.user.id),
                            name: this.currentUser.data.user.name,
                            surname: this.currentUser.data.user.surname,
                            patronymic: this.currentUser.data.user.patronymic,
                            email: this.currentUser.data.user.email,
                            telephone_number: this.currentUser.data.user.telephone_number,
                            birth: this.currentUser.data.user.birth,
                            location: this.currentUser.data.user.location,
                            sex: this.currentUser.data.user.sex,
                            token_mobile: this.currentUser.data.user.token_mobile
                        })
                        })
                    const result = await response.json()
                    if (response.status === 200 || response.status === 201){
                        console.log(JSON.stringify(result))
                        localStorage.setItem('user', JSON.stringify(this.currentUser))
                        console.log(this.currentUser.data)
                        console.log('Изменения успешно сохранены')
                        this.isChanging = false
                        this.isSaving = true
                        document.getElementById('userFirstName').setAttribute('disabled', 'disabled')
                        document.getElementById('userLastName').setAttribute('disabled', 'disabled')
                        document.getElementById('userFatherName').setAttribute('disabled', 'disabled')
                        document.getElementById('Email').setAttribute('disabled', 'disabled')
                        document.getElementById('phone').setAttribute('disabled', 'disabled')
                        document.getElementById('birth').setAttribute('disabled', 'disabled')
                        document.getElementById('userCity').setAttribute('disabled', 'disabled')
                        document.getElementById('userGender').setAttribute('disabled', 'disabled')

                    } else{
                        alert('Ошибка! Перепроверьте введеные данные')
                        this.errors = result
                        console.error(result)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Переход на вкладку Личные данные
            goOut(){
                this.isAuth = false
                localStorage.setItem('isAuthorized', false)
                localStorage.setItem('isSuccess', false)
                localStorage.removeItem('user')
            },

            //Переход на вкладку Мои маршруты
            choosePD(){
                this.isActivePD = true
                this.isActiveMRo = false
            },

            //Переход на вкладку Мои маршруты
            chooseMRotes(){
                this.isActivePD = false
                this.isActiveMRo = true
            },

            //Разрешение для изменения данных(для полей input удаляется свойство disabled)
            newChanges(){
                this.isChanging = true
                this.isSaving = false
                document.getElementById('userFirstName').removeAttribute('disabled')
                document.getElementById('userLastName').removeAttribute('disabled')
                document.getElementById('userFatherName').removeAttribute('disabled')
                document.getElementById('Email').removeAttribute('disabled')
                document.getElementById('phone').removeAttribute('disabled')
                document.getElementById('birth').removeAttribute('disabled')
                document.getElementById('userCity').removeAttribute('disabled')
                document.getElementById('userGender').removeAttribute('disabled')

            },

            //Запрет на изменение данных(для полей input устанавливается свойство disabled)
            saveNewChanges(){
                this.currentUser.data.user.surname = this.userData.surname
                this.currentUser.data.user.name = this.userData.name
                this.currentUser.data.user.patronymic = this.userData.patronymic
                this.currentUser.data.user.telephone_number = this.userData.telephone_number
                this.currentUser.data.user.email = this.userData.email
                this.currentUser.data.user.location = this.userData.location
                this.currentUser.data.user.sex = this.userData.sex
                this.currentUser.data.user.birth = this.userData.birth
                console.log(this.currentUser.data)
                this.saveChanges()
            },

            //Получение собственных маршрутов
            async getMyRoutes(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/me/profile?user_id=${this.userData.id}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        console.log(data)
                        this.myRoutes = data.data.routes
                        console.log(this.myRoutes);
                        console.log('getMyRoutes() - Успешно')
                    } else if (res.status === 422){ 
                        console.log("Пользователь не зарегистрирован");
                    }
                    else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Показ мобильного токена для регистрации в приложении
            getToken(){
                alert("Ваш мобильный токен - " + this.userData.token_mobile)
            }
        },

        validations:{
            userData:{
                surname: {required},
                name: {required},
                patronymic: {required},
                telephone_number: {numeric, minLength: minLength(11), maxLength: maxLength(11), isPhone},
                email: {required},
                location: {required},
                birth: {required},
                sex: {required}
            }
        }

  }

</script>

<style scoped>

.homePage{
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

.homePage h1{
    margin: 0px 0px 35px 13%; ;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
}

.homeInfo{
    /* background: -webkit-linear-gradient(90deg, #eae9f6,#ebebeb);
    background: linear-gradient(90deg, #eae9f6,#ebebeb); */
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
}

.selectedContent{
    text-align: left;
    margin-left: 13%;
    margin-right: 15px;
    height: 600px;
    width: 70%;
    background-color: #fcfcfc;
    border-radius: 15px;
}  


.contentSelection{
    height: 600px;
    width: 28%;
    margin-right: 10px;
}

.contentSelection h2{
    text-align: left;
    font-size: 25px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    margin-bottom: 25px;
}

.staticButton{
    padding: 5px 5px 5px 12px;
    margin-bottom: 13px;
    word-spacing: 2px;
    text-align: left;
    background-color: #cddfff00;
    border: 0px;
    display: block;
    width: 70%;
    height: 35px;
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    color: #943e3e;
}

.activeButton{
    /* background-color: #c7dafda3 !important;
    border-radius: 10px; */
    border-left: 3.2px solid #1fa2ffa3 !important;
}

.ActivePD{
    width: 100%;
}

.labelStyle{
    display: block;
    margin-bottom: 10px;
}

.currentInfo{
    color: #545454;
}

.FIO{
    width: 95%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;
}

.FIO div{
    width: 80%;
}

.FIO div input{
    width: 80%;
    height: 25px;
    background-color: #f5f4f4;
    border-radius: 5px;
    border: 3px solid #dddddd;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 17px;
    margin: 0px 5px;
    padding: 10px 15px;
    color: #545454;
}


.FIO div input:focus{
    outline: 2px solid #cdcdcd;
    outline-offset: 0px;
}

.extraInformation{
    width: 95%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;
}

.extraInformation div{
    width: 80%;
}

.extraInformation div input{
    color: #545454;
    width: 80%;
    height: 25px;
    background-color: #f5f4f4;
    border-radius: 5px;
    border: 3px solid #dddddd;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-size: 17px;
    font-weight: 500;
    margin: 0px 5px;
    padding: 10px 15px;
}

.extraInformation div input:focus{
    outline: 2px solid #cdcdcd;
    outline-offset: 0px;
}

.cityAndGender{
    width: 95%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;
}

.cityAndGender label{
    display: block !important;
}

.cityAndGender .city{
    width: 67.5%;
    padding: 0px 0px 0px 4px;
}

.cityAndGender .gender{
    width: 32.2%;
    padding: 0px 13px 0px 2.3%;
}

.cityAndGender .city .selectCity {
    width: 100%;
    height: 48px;
    background-color: #f5f4f4;
    border-radius: 5px;
    border: 3px solid #dddddd;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 17px;
    padding: 5px 7px;
    color: #545454;
    
}

.cityAndGender .city .selectCity:focus{
  outline: 2px solid #cdcdcd;
  outline-offset: 0px;
}

.cityAndGender .gender .selectGender{
    width: 100%;
    height: 48px;
    background-color: #f5f4f4;
    border-radius: 5px;
    border: 3px solid #dddddd;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 17px;
    padding: 5px 7px;
    color: #545454;
}

.changeInfo{
    width: 95%;
    margin: 150px auto;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;

}

.changeInfo div{
    width: 49%;
    margin: 5px;
}

.changeButton button{
    width: 70%;
    height: 55px;
    border-radius: 8px;
    background-color: #35cafc;
    color: #eeeaea;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 17px;
    border: 0;
    cursor: pointer;
}

.changeButton button:hover{
    background-color: #f5f4f4;
    border: 3px solid #35cafc;
    color: #474747;
    transition: all 0.5s ease;
}

.activeChanging{
    display: none;
}

.saveChangesButton button{
    margin-left: 28%;
    width: 70%;
    height: 55px;
    border-radius: 5px;
    background-color: #f5f4f4;
    border: 3px solid #35cafc;
    color: #474747;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 17px;
    word-spacing: 2px;
    cursor: pointer;
}

.saveChangesButton button:hover{
    background-color: #35cafc;
    color: #f0efef;
    transition: all 0.5s ease;
}

.activeSaving{
    display: none;
}

.ActiveMRo{
    height: 100%;
    margin: 20px 7px;
}

.ActiveMRo .lackOfRoutes{
    text-align: center;
}

.ActiveMRo .lackOfRoutes h1{
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 28px;
    margin: 0px;
    padding: 240px 30px;
}

.usersRoutes h1{
    margin: 0px;
    padding: 0px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 28px;
}

.route{
    display: flex;
    justify-content: space-between;
    border: 3px solid #c3c3c3;
    border-radius: 5px;
    margin: 10px auto 10px auto;
    height: 40px;
    width: 95%;
    padding: 10px 5px;
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
    font-size: 15px;
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
    width: 19%;
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

.ActiveFR{
    height: 100%;
    margin: 20px 7px;

}

.ActiveFR .lackOfFavs{
    padding: 240px 30px;
}

.ActiveFR .lackOfFavs h1{
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 28px;
    margin: 0px;
}

.ActiveFR .lackOfFavs .jumpToMain{
    width:28%;
    border: 3px solid #35cafc;
    border-radius: 5px ;
    height: 50px;
    width: 250px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 17px;
    word-spacing: 2px;
    cursor: pointer;
    color: #2b2b2b;
    margin: 190px 35% 20px 35%;
}

.ActiveFR .lackOfFavs .jumpToMain:hover{
    transition: all 0.4s ease;
    background-color: #35cafc;
    color: #f0efef;
    border: 0;
}

.ActiveFR .favRoutes h1{
    margin: 0px;
    padding: 0px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 28px;
}

.unauthorized{
    background-color: #fff;
    padding: 150px 0px;
    height: 20vh;
    width: 50%;
    margin: 40px auto;
    border-radius: 9px;
    border: 4px solid #b3b3b3a3;
}

.unauthorized h1{
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 35px;
    margin: 10px 0px;
}

.linkToAuth{
    text-align: center;
    text-decoration: none;
    margin: 20px 0px;
    color: #5990d9;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 17px;
}

.invalidInput{
    border-color: rgb(255, 0, 0) !important;
}

.logOutBtn{
    position: relative;
    top: 313px;
    width: 70%;
    height: 55px;
    border-radius: 8px;
    background-color: #35cafc;
    color: #eeeaea;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 17px;
    border: 0;
    cursor: pointer;
}

.logOutBtn:hover{
    background-color: #f5f4f4;
    border: 3px solid #35cafc;
    color: #474747;
    transition: all 0.5s ease;
}

.getTokenBtn{
    position: relative;
    top: 300px;
    width: 70%;
    height: 55px;
    border-radius: 8px;
    background-color: #00f593;
    border: 2.5px solid #00cc7b;
    color: #fff;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-size: 17px;
    cursor: pointer;
}

.getTokenBtn:hover{
    background-color: #f5f4f4;
    border: 2.5px solid #00cc7b;
    color: #474747;
    transition: all 0.5s ease;
}


.rating{
    display: flex
}

.rating p{
    margin: 0px
}

.rating img{
    display: block;
    margin-top: 2px;
    width: 15px;
    height: 15px
}

.lackRating{
    margin-top: 9px;
}



</style>