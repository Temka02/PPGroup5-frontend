<template>
    <div class="mainPage">
        <div class="filters">
            <label for="sorting" class="labelForSort">Сортировка:</label>
            <select class="selectSort" id="sorting">
                <option value="dateUp" selected>По дате(возрастание)</option>
                <option value="dateDown" >По дате(убывание)</option>
                <option value="distanceUp">По дистанции(возрастание)</option>
                <option value="distanceDown">По дистанции(убывание)</option>
                <option value="ratingUp">По рейтингу(возрастание)</option>
                <option value="ratingDown">По рейтингу(убывание)</option>
            </select>
        </div>
        <div class="routes">
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
            <router-link to="/ViewRoute" class="openMore">
                <div class="route">
                    <div class="imgRoute"><img src="../assets/map1.jpg" alt=""></div>
                    <div class="footerText">
                        <div class="rating">Оценка:</div>
                        <div class="distance">Расстояние:</div>
                        <div class="authorName">Автор: Я</div>
                    </div>
                </div>
            </router-link>
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

<style>

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

.filters{
    border-radius: 9px;
    height: 80px;
    width: 100%;
    padding: 10px 10px
}

.labelForSort{
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
}

.selectSort{
    width: 30%;
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

.openMore{
    height: 100%;
    width: 32%;
    text-decoration: none;
    color: #000;
    margin: 0px 5px 0px 0px;
}

.imgRoute img{
    height: 100%;
    width: 100%;
}

.routes{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.route{
    border: 3px solid #c3c3c3;
    border-radius: 5px;
    margin: 15px 0px;
    height: 280px;
    width: 100%;
    
}

.imgRoute{
    height: 86%;
    
}

.footerText{
    background-color: #fcfcfc;
    height: 14%;
    display: flex;
    border-top: 3px solid #c3c3c3;
    border-top:0 ;
}

.footerText p{
    margin: 0px 0px;
}

.rating{
    padding: 9px 3px 1px 5px;
    border: 1px solid #c3c3c3;
    width: 60%;
    height: 30px;
    vertical-align: middle;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
}

.distance{
    height: 30px;
    padding: 9px 3px 1px 5px;
    border: 1px solid #c3c3c3;
    width: 100%;
    vertical-align: middle;
    border-right: 0;
    border-bottom: 0;
}

.authorName{
    height: 30px;
    border: 1px solid #c3c3c3;
    border-right: 0;
    padding: 9px 3px 1px 5px;
    width: 100%;
    vertical-align: middle;
    border-bottom: 0;
}










</style>