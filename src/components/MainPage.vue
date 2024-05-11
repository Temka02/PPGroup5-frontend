<template>
    <div class="mainPage">
        <h1>Сортировать:</h1>
        <div class="filters">
        
            <div class="sortTime">
                <select class="selectSort" id="sorting">
                    <option value="TimeUp" selected>По времени (возрастание)</option>
                    <option value="TimeDown" >По времени (убывание)</option>
                </select>
            </div>

            <div class="sortDist">
                <select class="selectSort" id="sorting">
                    <option value="distanceUp">По дистанции (возрастание)</option>
                    <option value="distanceDown">По дистанции (убывание)</option>
                </select>
            </div>

            <div class="sortRate">
                <select class="selectSort" id="sorting">
                    <option value="ratingUp">По рейтингу (возрастание)</option>
                    <option value="ratingDown">По рейтингу (убывание)</option>
                </select>
            </div>

        </div>

        <div class="routes">
                <div class="route">

                    <img src="../assets/bike.svg" alt="bike">

                    <div class="routeText">
                        <div class="distance">Расстояние: 2,2km</div>
                        <div class="time">Время: 01:12:54</div>
                        <div class="authorName"><router-link to="/AuthorsProfile">Автор: Артем Степанов</router-link></div>
                        <div class="rating">Оценка: 4,7 <img src="../assets/star.svg" alt="star"> </div>
                    </div>

                    <div id="linkToOpenMore">
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
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
                        <router-link to="/ViewRoute" class="routerLinkStyle">Посмотреть подробности</router-link>
                        <router-link to="/ViewRoute"><img src="../assets/more.svg" alt="more"></router-link>
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
    width: 95%;
    padding: 10px 5px 10px 15px
}

.routeText{
    background-color: #fcfcfc;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 3px solid #c3c3c3;
    border-top:0 ;
    padding-left: 40px;
    width: 65%;
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