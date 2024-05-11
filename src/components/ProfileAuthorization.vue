<template>
    <div class="profileAuthorization">
        <div v-if="auth" class="authorization">
            <form action="">
                <label for="login" class="labelStyle">Логин</label>
                <input @blur="v$.formData.login.$touch()"      
                       v-model="formData.login"
                       type="text"
                       :class="{ 'isInvalid': v$.formData.login.$error}"
                       placeholder="Ваш номер телефона" 
                       required id="login">
                <div v-if="v$.formData.login.numeric.$invalid" class="invalidFeedback">
                    Номер телефона должен содержать только цифры
                </div>
                <div v-if="(v$.formData.login.minLength.$invalid || v$.formData.phoneNumber.maxLength.$invalid) " class="invalidFeedback">
                    Номер телефона должен состоять из 11 цифр
                </div>

                <label for="logPassword" class="labelStyle">Пароль</label>
                <input @blur="v$.formData.logPassword.$touch()"
                       :class="{ 'isInvalid': v$.formData.logPassword.$error}"
                       v-model="formData.logPassword"
                       type="password" 
                       placeholder="Пароль" 
                       required id="logPassword">
                <div v-if="(this.v$.formData.logPassword.minLength.$invalid || this.v$.formData.password.maxLength.$invalid)" class="invalidFeedback">
                    Пароль должен содержать от 6 до 25 символов
                </div>

                <div class="btns">
                    <button @click="toReg()" class="btnToReg"> <h4>Регистрация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                    <button @click="toConfirm()" :disabled="disabledBtn2" class="btnForComfirm" type="submit">Войти в профиль</button>
                </div>
            </form>
        </div>
        
        <div v-else-if="registr" class='registration'>

            <form @submit="toConfirm()" action="" novalidate>
                <label for="surname" class="labelStyle">Фамилия</label>
                <input @blur="v$.formData.surname.$touch()"
                       :class="{ 'isInvalid': v$.formData.surname.$error}" 
                       v-model="formData.surname" 
                       type="text" 
                       placeholder="Ваша фамилия" 
                       required id="surname">

                <div v-if="v$.formData.surname.minLength.$invalid " class="invalidFeedback">
                    Введеное имя слишком короткое
                </div>
                <div v-if="v$.formData.surname.maxLength.$invalid" class="invalidFeedback">
                    Введеное имя слишком длинное
                </div>
                <div v-if="v$.formData.surname.alpha.$invalid" class="invalidFeedback">
                    В поле не должно содержаться цифр или других символов
                </div>

                <label for="name" class="labelStyle">Имя</label>
                <input @blur="v$.formData.name.$touch()"
                       v-model="formData.name"
                       :class="{ 'isInvalid': v$.formData.name.$error}"
                       type="text" 
                       placeholder="Ваше имя" 
                       required 
                       id="name">
                <div v-if="v$.formData.name.minLength.$invalid " class="invalidFeedback">
                    Введеная фамилия слишком короткая
                </div>
                <div v-if="v$.formData.name.maxLength.$invalid" class="invalidFeedback">
                    Введеная фамилия слишком длинная 
                </div>
                <div v-if="v$.formData.name.alpha.$invalid" class="invalidFeedback">
                    В поле не должно содержаться цифр или других символов
                </div>
                
                
                <label for="fatherName" class="labelStyle">Отчество</label>
                <input @blur="v$.formData.fatherName.$touch()"
                       v-model="formData.fatherName"
                       :class="{ 'isInvalid': v$.formData.fatherName.$error}" 
                       type="text" 
                       placeholder="Ваше отчество" 
                       required id="fatherName">
                <div v-if="v$.formData.fatherName.minLength.$invalid " class="invalidFeedback">
                    Введеное отчество слишком короткое
                </div>
                <div v-if="v$.formData.fatherName.maxLength.$invalid" class="invalidFeedback">
                    Введеное отчество слишком длинное
                </div>
                <div v-if="v$.formData.fatherName.alpha.$invalid" class="invalidFeedback">
                    В поле не должно содержаться цифр или других символов
                </div>



                <label for="phoneNumber" class="labelStyle">Номер телефона</label>
                <input @blur="v$.formData.phoneNumber.$touch()"
                       v-model="formData.phoneNumber"
                       :class="{ 'isInvalid': v$.formData.phoneNumber.$error}" 
                       type="text" 
                       placeholder="89..." 
                       required 
                       id="phoneNumber">
                <div v-if="v$.formData.phoneNumber.numeric.$invalid" class="invalidFeedback">
                    Номер телефона должен содержать только цифры
                </div>
                <div v-if="(v$.formData.phoneNumber.minLength.$invalid || v$.formData.phoneNumber.maxLength.$invalid) " class="invalidFeedback">
                    Номер телефона должен состоять из 11 цифр
                </div>
                


                <label for="eMail" class="labelStyle">E-mail</label>
                <input v-model="formData.eMail"
                       :class="{ 'isInvalid': v$.formData.eMail.$error}" 
                       @blur="v$.formData.eMail.$touch()"
                       type="text" 
                       placeholder="Ваш e-mail" 
                       required 
                       id="eMail">
                <div v-if="v$.formData.eMail.email.$invalid" class="invalidFeedback">
                    Поле должно быть email адресом
                </div>
                <div v-if="v$.formData.eMail.minLength.$invalid " class="invalidFeedback">
                    Введеный email слишком короткий
                </div>
                <div v-if="v$.formData.eMail.maxLength.$invalid" class="invalidFeedback">
                    Введеный email слишком длинный
                </div>



                <label for="city" class="labelStyle">Ваш город</label>
                <select v-model="formData.city"
                        :class="{ 'isInvalid': v$.formData.city.$error}"
                        @blur="v$.formData.city.$touch()" 
                        class="selectCity" 
                        id="userCity">
                    <option value="astrahan">Астрахань</option>
                    <option value="volgograd">Волгоград</option>
                    <option value="voronezh">Воронеж</option>
                    <option value="ekaterinburg">Екатеринбург</option>
                    <option value="kazan">Казань</option>
                    <option value="krasnodar">Краснодар</option>
                    <option value="krasnoyarsk">Красноярск</option>
                    <option selected value="moscow" >Москва</option>
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

                <label for="birth" class="labelStyle">Дата рождения</label>
                <input v-model="formData.birth" 
                       :class="{ 'isInvalid': v$.formData.birth.$error}"
                       @blur="v$.formData.birth.$touch()"
                       type="date" 
                       id="birth" 
                       value="" 
                       max="2010-01-01" 
                       min="1900-01-01" 
                       class="currentInfo">

                <label for="gender" class="labelStyle">Пол</label>
                <select v-model="formData.gender" 
                       :class="{ 'isInvalid': v$.formData.gender.$error}"
                       @blur="v$.formData.gender.$touch()"
                       class="selectGender" 
                       id="userGender">
                    <option selected value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>

                <label for="password" class="labelStyle">Придумайте пароль</label>
                <input v-model="formData.password" 
                       @blur="v$.formData.password.$touch()"
                       :class="{ 'isInvalid': v$.formData.password.$error}"
                       type="password" 
                       placeholder="Пароль" 
                       required 
                       id="password">
                <div v-if="(this.v$.formData.password.minLength.$invalid || this.v$.formData.password.maxLength.$invalid)" class="invalidFeedback">
                    Пароль должен содержать от 6 до 25 символов
                </div>

                <label for="passwordConfirm" class="labelStyle">Повторите пароль</label>
                <input v-model="formData.passwordConfirm"
                       @blur="v$.formData.passwordConfirm.$touch()"
                       :class="{ 'isInvalid': v$.formData.passwordConfirm.$error}"
                       type="password" 
                       placeholder="Пароль" 
                       required 
                       id="passwordConfirm">
                <div v-if="!(this.v$.formData.password.$model === this.v$.formData.passwordConfirm.$model)" class="invalidFeedback">
                    Пароли должны совпадать
                </div>

                <div class="btns">
                    <button @click="toAuth()" class="btnToAuth"> <h4>Авторизация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                    <button class="btnForComfirm" :disabled="disabledBtn1" type="submit">Подтвердить</button>
                </div>
            </form>
        </div>

        <div v-else class="successful">
            <h1>Вы успешно вошли в профиль</h1>
            <router-link to="/lk">Перейти в личный кабинет</router-link>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength } from '@vuelidate/validators'
import { helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

    export default{
        name: 'ProfileAuthorization',
        setup () {
            return { v$: useVuelidate() }
        },
        data(){
            return{
                auth: true,
                registr: true,
                success: false,
                formData: {
                    login: '',
                    logPassword: '',
                    surname: '',
                    name: '',
                    fatherName: '',
                    phoneNumber: '',
                    eMail: '',
                    city: '',
                    birth: '',
                    gender: '',
                    password: '',
                    passwordConfirm: ''
                }
            }
        },
        computed: {
            disabledBtn1(){      
                return this.v$.formData.surname.$invalid || 
                this.v$.formData.name.$invalid || 
                this.v$.formData.fatherName.$invalid || 
                this.v$.formData.phoneNumber.$invalid || 
                this.v$.formData.eMail.$invalid ||
                this.v$.formData.city.$invalid || 
                this.v$.formData.birth.$invalid || 
                this.v$.formData.gender.$invalid || 
                this.v$.formData.password.$invalid ||
                this.v$.formData.passwordConfirm.$invalid ||
                
                this.v$.formData.surname.minLength.$invalid ||
                this.v$.formData.surname.maxLength.$invalid ||
                this.v$.formData.name.minLength.$invalid ||
                this.v$.formData.name.maxLength.$invalid ||
                this.v$.formData.fatherName.minLength.$invalid ||
                this.v$.formData.fatherName.maxLength.$invalid ||
                this.v$.formData.phoneNumber.minLength.$invalid ||
                this.v$.formData.phoneNumber.maxLength.$invalid ||
                this.v$.formData.eMail.minLength.$invalid ||
                this.v$.formData.eMail.maxLength.$invalid ||
                this.v$.formData.password.minLength.$invalid ||
                this.v$.formData.password.maxLength.$invalid ||
                this.v$.formData.passwordConfirm.minLength.$invalid ||
                this.v$.formData.passwordConfirm.maxLength.$invalid ||

                this.v$.formData.surname.alpha.$invalid ||
                this.v$.formData.name.alpha.$invalid ||
                this.v$.formData.fatherName.alpha.$invalid ||

                this.v$.formData.phoneNumber.numeric.$invalid ||

                this.v$.formData.eMail.email.$invalid ||

                !(this.v$.formData.password.$model === this.v$.formData.passwordConfirm.$model) 
                
            },
            disabledBtn2(){
                return this.v$.formData.login.$invalid || this.v$.formData.logPassword.$invalid
            }
        },
        methods: {
            toReg(){
                this.auth = false
                this.registr = true
                this.success = false
                this.formData.login = ''
                this.formData.logPassword = ''
                this.v$.$reset()
            },
            toAuth(){
                this.auth = true
                this.registr = false
                this.success = false
                this.formData.surname = ''
                this.formData.name = ''
                this.formData.fatherName = ''
                this.formData.phoneNumber = ''
                this.formData.email = ''
                this.formData.city = ''
                this.formData.birth = ''
                this.formData.gender = ''
                this.formData.password = ''
                this.formData.passwordConfirm = ''
                this.v$.$reset()
            },
            toConfirm(){
                this.auth = false
                this.registr = false
                this.success = true
                this.formData.login = ''
                this.formData.logPassword = ''
                this.formData.surname = ''
                this.formData.name = ''
                this.formData.fatherName = ''
                this.formData.phoneNumber = ''
                this.formData.email = ''
                this.formData.city = ''
                this.formData.birth = ''
                this.formData.gender = ''
                this.formData.password = ''
                this.formData.passwordConfirm = ''
                this.v$.$reset()
            }
        },
        validations:{
            formData:{
                login: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
                logPassword: {required, minLength: minLength(6), maxLength: maxLength(25)},
                surname: {required, alpha, minLength: minLength(2), maxLength: maxLength(15)},
                name: {required, alpha, minLength: minLength(2), maxLength: maxLength(20)},
                fatherName: {required, alpha, minLength: minLength(2), maxLength: maxLength(25)},
                phoneNumber: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
                eMail: {required, email, minLength: minLength(7), maxLength: maxLength(50)},
                city: {required},
                birth: {required},
                gender: {required},
                password: {required, minLength: minLength(6), maxLength: maxLength(25)},
                passwordConfirm: {required, minLength: minLength(6), maxLength: maxLength(25)},
            }
        }
    }
</script>

<style scoped>
    .profileAuthorization{
        height: 100%;
        width: 100%;
        font-size: 14px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        background-color: #f1f1f1dd;
        padding-top: 45px;
        border: 3.5px solid #eeeeeedd;
        border-top: 0;
    }

    .authorization{
        padding: 90px 10px 20px 30px;
        border-radius: 9px;
        border: 4px solid #dfdfdfdd;
        background-color: #fff;
        width: 70%;
        height: 70%;
        margin: 0px auto 25px auto;
        text-align: center;
    }

    .authorization label{
        display: block;
        font-size: 25px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 600;
    }

    .authorization input{
        width: 60%;
        height: 25px;
        background-color: #f5f4f4;
        border-radius: 5px;
        border: 3px solid #dddddd;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
        margin: 10px 5px 20px 5px;
        padding: 10px 15px;
        color: #545454;
    }
    .btns{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .authorization .btnToReg{
        border: 0;
        display: flex;
        background-color: #ffffff;
        align-items: center;
        width: 14%;
        text-align: center;
        padding: 0;
        margin: 104px 0px 0px 0px;
        cursor: pointer;
    }

    .btnToReg h4{
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
        margin: 0px;
        color: #2f2f2f;
    }

    .btnToReg img{
        display: inline;
        padding-top: 3px;
        width: 25px;
        height: 21px;
    }

    .authorization .btnForComfirm{
        border: 3px solid #35cafc;
        border-radius: 5px;
        background-color: #ffffff;
        align-items: center;
        width: 20%;
        height: 50px;
        text-align: center;
        padding: 5px;
        margin: 110px 0px 0px 0px;
        cursor: pointer;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-size: 18px;
    }

    .authorization .btnForComfirm:hover{
        transition: all 0.4s ease;
        background-color: #35cafc;
        color: #f0efef;
        border: 0;
    }

    .registration{
        padding: 30px 10px 20px 30px;
        border-radius: 9px;
        border: 4px solid #dfdfdfdd;
        background-color: #fff;
        width: 70%;
        height: 84.5%;
        margin: 0px auto 25px auto;
        text-align: center;
        height: 100%;
    }

    .registration label{
        display: block;
        font-size: 20px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 600;
    }

    .registration input{
        width: 60%;
        height: 20px;
        /* background-color: #f5f4f4; */
        border-radius: 5px;
        border: 3px solid #dddddd;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 15px;
        margin: 8px 5px 3px 5px;
        padding: 10px 15px;
        color: #545454;
    }

    .registration select{
        width: 63.8%;
        height: 45px;
        /* background-color: #f5f4f4; */
        border-radius: 5px;
        border: 3px solid #dddddd;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 15px;
        margin: 8px 5px 15px 5px;
        padding: 10px 15px;
        color: #545454;
    }


    .registration .btnToAuth{
        border: 0;
        display: flex;
        background-color: #ffffff;
        align-items: center;
        width: 14%;
        text-align: center;
        padding: 0;
        margin: 104px 0px 0px 0px;
        cursor: pointer;
    }
    .btnToAuth h4{
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
        margin: 0px 0px 0px 0px;
        color: #2f2f2f;
    }

    .btnToAuth img{
        display: inline;
        padding-top: 3.8px;
        width: 25px;
        height: 21px;
    }

    .registration .btnForComfirm{
        border: 3px solid #35cafc;
        border-radius: 5px;
        background-color: #ffffff;
        align-items: center;
        width: 19%;
        height: 45px;
        text-align: center;
        padding: 5px;
        margin: 110px 0px 0px 0px;
        cursor: pointer;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-size: 18px;
    }

    .registration .btnForComfirm:hover{
        transition: all 0.4s ease;
        background-color: #35cafc;
        color: #f0efef;
        border: 0;
    }

    .isInvalid{
        background-color: #ffd8d8 !important;
        border: 2px solid #c40000 !important;
    }

    .invalidFeedback{
        color: #da0000;
        text-align: center;
        margin-bottom: 12px;
    }

</style>