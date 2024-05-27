<template>
    <yandex-map
        v-model="map"
        @map-was-loaded="onMapWasLoaded"
        :mapsRenderWaitDuration="10000" 
        :settings="{
            location: {
            center: [this.centerCoord1, this.centerCoord2],
            zoom: 10,
            },
            theme,
            showScaleInCopyrights: true, //Для отображения масштабирования
        }"
    >
        <!-- Добавления слоя для отображения основной информации на карте -->
        <yandex-map-default-scheme-layer /> 

        <!-- Добавления слоя для отображения основных функций на карте -->
        <yandex-map-default-features-layer />

        <!-- Добавление собственного функционала -->
        <yandex-map-feature
            :settings="{
            geometry: {
                type: 'LineString',
                coordinates: this.currentRouteCoord,
            },
            style: {
                stroke: [{ color: '#007afce6', width: 3 }]
            },
            }"
        />

    </yandex-map>
</template>
  
<script setup>
  import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultSchemeLayer,
    YandexMapFeature,
    } from 'vue-yandex-maps';

</script>

<script>
    export default{
        name: 'YandexMap',

        data() {
            return {
                currentRouteInfo: '',
                currentRouteId: '',
                currentRouteCoord: '',
                centerCoord: '',
                centerCoord1: '',
                centerCoord2: ''
            }
        },

        created(){
            this.currentRouteId = Number(localStorage.getItem('routeID'))
            this.getCurrentRouteInfo()
        },

        methods: {
            
            //Получение массива с координатами
            async getCurrentRouteInfo(){
                try {
                    const res = await fetch(`http://10.147.17.88:8000/route/${this.currentRouteId}`)
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201){
                        this.currentRouteInfo = data.data.route
                        this.currentRouteCoord = data.data.coordinates
                        console.log(this.currentRouteCoord);
                        this.centerCoord1 = Number(data.data.coordinates[0][0])
                        this.centerCoord2 = Number(data.data.coordinates[0][1])
                        console.log(this.centerCoord1);
                        console.log(this.centerCoord2);
                    } else{
                        alert('Ошибка!')
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }

    }
</script>
