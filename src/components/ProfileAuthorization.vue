<template>
    <div class="profileAuthorization">

        <div v-if="auth" class="authorization">
            <form @submit.prevent="toConfirm()" action="" novalidate>
                <label for="login" class="labelStyle">Логин</label>
                <input @blur="v$.formData.login.$touch()"      
                       v-model.trim="formData.login"
                       type="text"
                       :class="{ 'isInvalid': v$.formData.login.$error}"
                       placeholder="Ваш логин" 
                       required id="login">

                <div v-if="(this.v$.formData.login.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>
                <label for="logPassword" class="labelStyle">Пароль</label>
                <input @blur="v$.formData.logPassword.$touch()"
                       :class="{ 'isInvalid': v$.formData.logPassword.$error}"
                       v-model.trim="formData.logPassword"
                       type="password" 
                       placeholder="Пароль" 
                       required id="logPassword">

                <div v-if="(this.v$.formData.logPassword.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>

                <div class="btns">
                    <button @click="toReg()" class="btnToReg"> <h4>Регистрация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                    <button @click="toConfirm(), signIn()" :disabled="disabledBtn2" class="btnForComfirm" type="submit" >Войти в профиль</button>
                </div>
            </form>
        </div>
        
        <div v-else-if="registr" class='registration'>

            <form @submit.prevent="toConfirm()" action="" novalidate>

                <label for="name" class="labelStyle">Имя</label>
                <input @blur="v$.formData.name.$touch()"
                       v-model.trim="formData.name"
                       :class="{ 'isInvalid': v$.formData.name.$error}"
                       type="text" 
                       placeholder="Ваше имя" 
                       required 
                       id="name">

                <div v-if="(this.v$.formData.name.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>

                <label for="loginReg" class="labelStyle">Логин</label>
                <input @blur="v$.formData.loginReg.$touch()"
                       v-model.trim="formData.loginReg"
                       :class="{ 'isInvalid': v$.formData.loginReg.$error}" 
                       type="text" 
                       placeholder="Ваш логин" 
                       required id="loginReg">

                <div v-if="(this.v$.formData.loginReg.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>

                <label for="password" class="labelStyle">Придумайте пароль</label>
                <input v-model.trim="formData.password" 
                       @blur="v$.formData.password.$touch()"
                       :class="{ 'isInvalid': v$.formData.password.$error}"
                       type="password" 
                       placeholder="Пароль" 
                       required 
                       id="password">

                <div v-if="(this.v$.formData.password.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>

                <label for="passwordConfirm" class="labelStyle">Повторите пароль</label>
                <input v-model.trim="formData.passwordConfirm"
                       @blur="v$.formData.passwordConfirm.$touch()"
                       :class="{ 'isInvalid': v$.formData.passwordConfirm.$error}"
                       type="password" 
                       placeholder="Пароль" 
                       required 
                       id="passwordConfirm">

                <div v-if="(this.v$.formData.passwordConfirm.$error)" class="invalidFeedback">
                    Поле обязательно для заполнения
                </div>

                <div v-if="!(this.v$.formData.password.$model === this.v$.formData.passwordConfirm.$model)" class="invalidFeedback">
                    Пароли должны совпадать
                </div>


                <div class="btns">
                    <button  class="btnToAuth" type="submit" @click="toAuth()"> <h4>Авторизация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                    <button class="btnForComfirm" :disabled="disabledBtn1" type="submit" @click="signUp(), toConfirm()">Зарегистрироваться</button>
                </div>
            </form>
        </div>

        <div v-else class="successful" :isAuthorized="this.isAuthorized">
            <div class="switchPage">
                <h1>Вы успешно вошли в профиль</h1>
                <router-link to="/lk">Перейти в личный кабинет</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'


    export default{

        name: 'ProfileAuthorization',

        setup () {
            return { v$: useVuelidate() }
        },

        data(){
            return{
                auth: true,
                registr: false,
                success: false,
                isAuthorized: false,
                errors: [],
                formData: {
                    login: '',
                    logPassword: '',
                    name: '',
                    loginReg: '',
                    password: '',
                    passwordConfirm: ''
                }
            }
        },

        //При перезагрузке сохраняет успешный вход в ЛК
        mounted(){
            if (localStorage.getItem('isSuccess') === 'true'){
                this.success = true
                this.auth = false
                this.success = false
            }
        },
        
        computed: {

            //Валидация регистрации
            disabledBtn1(){      
                return this.v$.formData.name.$invalid || 
                this.v$.formData.loginReg.$invalid||
                this.v$.formData.password.$invalid ||
                this.v$.formData.passwordConfirm.$invalid ||

                !(this.v$.formData.password.$model === this.v$.formData.passwordConfirm.$model)
                
            },

            //Валидации авторизации
            disabledBtn2(){
                return this.v$.formData.login.$invalid || this.v$.formData.logPassword.$invalid
            }
        },

        methods: {

            //Переход к регистрации
            toReg(){
                this.auth = false
                this.registr = true
                this.success = false
                this.formData.login = ''
                this.formData.logPassword = ''
                this.v$.$reset()
            },

            //Переход к авторизации
            toAuth(){
                this.auth = true
                this.registr = false
                this.success = false
                this.formData.name = ''
                this.formData.loginReg = ''
                this.formData.password = ''
                this.formData.passwordConfirm = ''
                this.v$.$reset()
            },

            //Отправка формы
            toConfirm(){
                this.v$.$reset()
                console.log('Форма успешно отправлена!')
            },

            // Регистрация
            async signUp(){
                try {
                    const res = await fetch('http://10.147.17.88:8000/auth/authorization', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            login: this.formData.loginReg,
                            name: this.formData.name,
                            password: this.formData.password
                        })
                    })
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.success = true
                        this.auth = false
                        this.registr = false
                        this.success = true
                        localStorage.setItem('isAuthorized', true)
                        localStorage.setItem('user', JSON.stringify(data))
                        localStorage.setItem('isAuth', true)
                        localStorage.setItem('isSuccess', true)
                        console.log('Регистрация прошла успешна')

                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            },

            //Авторизация
            async signIn(){
                try {
                    const response = await fetch('http://10.147.17.88:8000/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            login: this.formData.login,
                            password: this.formData.logPassword
                        })
                    })
                    const result = await response.json()
                    if (response.status === 200 || response.status === 201){
                        this.success = true
                        this.auth = false
                        this.registr = false
                        this.success = true
                        localStorage.setItem('isAuthorized', true)
                        localStorage.setItem('user', JSON.stringify(result))
                        localStorage.setItem('isAuth', true)
                        localStorage.setItem('isSuccess', true)
                    } else{
                        alert('Ошибка! Перепроверьте введеные логин и пароль')
                        console.log(this.formData.login)
                        console.log(this.formData.logPassword)
                        this.errors = result
                        console.error(result)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        },

        //Валидации
        validations:{
            formData:{
                login: {required},
                logPassword: {required},
                name: {required},
                loginReg:{required},
                password: {required},
                passwordConfirm: {required},
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
        margin: 10px 5px 3px 5px;
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
        padding-top: 2.6px;
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
        font-size: 25px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
    }

    .registration input{
        width: 60%;
        height: 20px;
        background-color: #f5f4f4;
        border-radius: 5px;
        border: 3px solid #dddddd;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
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
        margin: 84px 0px 0px 0px;
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
        padding-top: 3px;
        width: 25px;
        height: 21px;
    }

    .registration .btnForComfirm{
        border: 3px solid #35cafc;
        border-radius: 5px;
        background-color: #ffffff;
        align-items: center;
        height: 45px;
        text-align: center;
        padding: 8px 15px;
        margin: 84px 0px 0px 0px;
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

    .switchPage{
        height: 63vh;
        width: 70%;
        font-size: 14px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        background-color: #fff;
        border: 3.5px solid #eeeeeedd;
        border-radius: 15px;
        border-top: 0;
        margin: 0px auto 15px auto;
        padding: 20px;
        text-align: center
    }

    .switchPage h1{
        padding-top: 16%;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-size: 45px;
        color: #005b79;
        margin-bottom: 170px;
    }

    .switchPage a{
        padding: 15px 10px;
        border-radius: 8px;
        border: 3.5px solid #35cafc;
        text-decoration: none;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-size: 23px;
        color: #000;
    }
    .switchPage a:hover{
        transition: all 0.4s ease;
        background-color: #35cafc;
        color: #f0efef;
        border: 0;
    }
</style>