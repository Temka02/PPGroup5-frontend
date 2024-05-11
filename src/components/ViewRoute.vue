<template>
    <div class="ViewRoute">
         <div class="ViewInfo">
            <!-- <img src="../assets/map1.jpg" alt="map1"> -->
            <div class="imageOfRoute">
                <div id="map"></div>
            </div>
            
            <div class="detailsOfRoute">
                <h3>Дистанция: {{ routeDistance }}</h3>
                <h3>Время: {{ routeDuration }}</h3>            
                <h3><router-link to="/AuthorsProfile">Автор: {{ routeAuthor }}</router-link></h3>
                <h3>Оценка:  {{ routeRating }}<img src="../assets/star.svg"></h3>
                <button @click="addToWishlist()" id="addBtn" value="notAdded">Добавить в список желаемых маршрутов</button>
                <button @click="removeFromWishlist()" id="removeBtn" value="notAdded">Удалить из списка желаемых маршрутов</button>
            </div>
           
        </div>
        <router-link to="/" id="returnHome"><button class="returnBack" >Вернуться на главную страницу</button></router-link> 
        
    </div>
    
</template>

<script>

    export default{
        name: 'ViewRoute',
        data(){
            return{
                routeDistance: '',
                routeDuration: '',
                routeAuthor: '',
                routeRating: ''
            }
        },
        methods: {
            addToWishlist(){
                 if (document.getElementById('addBtn').value == "notAdded"){
                    document.getElementById('addBtn').classList.toggle("hideAddBtn")
                    document.getElementById('removeBtn').classList.toggle("hideRemoveBtn")
                 } 
            },
            removeFromWishlist(){
                if (document.getElementById('removeBtn').value == "notAdded"){
                    document.getElementById('addBtn').classList.remove("hideAddBtn")
                    document.getElementById('removeBtn').classList.toggle("hideRemoveBtn")
                 }

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
    height: 470px;
    width: 62%;
    margin-left: 30px;
}

.imageOfRoute img{
    height: 466px;
    width: 100%;
    border: 2px solid #d6d6d6dd;
    border-radius: 5px;
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

</style>