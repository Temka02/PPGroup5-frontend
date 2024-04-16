<template>
    <div class="profileAuthorization">
        <div v-if="auth" class="authorization">

            <label for="" class="labelStyle">Логин</label>
            <input type="text" placeholder="login">

            <label for="" class="labelStyle">Пароль</label>
            <input type="text" placeholder="password">

            <div class="btns">
                <button @click="toReg()" class="btnToReg"> <h4>Регистрация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                <button @click="confirm()" class="btnForComfirm">Подтвердить</button>
            </div>
            

        </div>
        
        <div v-else class='registration'>
           
            <label for="" class="labelStyle">Придумайте логин</label>
            <input type="text" placeholder="login">

            <label for="" class="labelStyle">Придумайте пароль</label>
            <input type="text" placeholder="password">

            <label for="" class="labelStyle">Повторите пароль</label>
            <input type="text" placeholder="repeat password">

            <label for="Email" class="labelStyle">Введите ваш E-mail</label>
            <input type="email" placeholder="e-mail">

            <div class="btns">
                <button @click="toAuth()" class="btnToAuth"> <h4>Авторизация</h4> <img src="../assets/arrow.svg" alt="right arrow"></button>
                <button @click="confirm()" class="btnForComfirm">Подтвердить</button>
            </div>


        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProfileAuthorization',
        data(){
            return{
                auth: true
            }
        },
        methods: {
            toReg(){
                this.auth = false
            },
            toAuth(){
                this.auth = true
            }
        }
    }
</script>

<style scoped>
    .profileAuthorization{
        height: 70vh;
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
        margin: 0px auto;
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
        margin: 104px 0px 20px 0px;
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
        /* border: 3px solid #2f2f2f; */
        border: 0;
        display: flex;
        background-color: #ffffff;
        align-items: center;
        width: 17%;
        height: 30px;
        text-align: center;
        padding: 5px;
        margin: 110px 0px 20px 0px;
        cursor: pointer;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
    }

    .registration{
        padding: 30px 10px 5px 30px;
        border-radius: 9px;
        border: 4px solid #dfdfdfdd;
        background-color: #fff;
        width: 70%;
        height: 84.5%;
        margin: 0px auto;
        text-align: center;
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
        background-color: #f5f4f4;
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
        margin-top: 11px; 
        margin-right: 1px;
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
        /* border: 3px solid #2f2f2f; */
        border: 0;
        display: flex;
        background-color: #ffffff;
        align-items: center;
        width: 17%;
        height: 30px;
        text-align: center;
        padding: 5px;
        margin: 18.5px 0px 0px 0px;
        cursor: pointer;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 17px;
    }





</style>