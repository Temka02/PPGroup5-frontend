import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createYmaps } from 'vue-yandex-maps';


import App from './App.vue';
import MainPage from './components/MainPage'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import AddRoute from './components/AddRoute.vue'
import ViewRoute from './components/ViewRoute.vue'
import ProfileAuthorization from './components/ProfileAuthorization.vue'
import AuthorsProfile from './components/AuthorsProfile.vue'


const routes = [
    {
        path:'/lk',
        name:'HomePage',
        component: HomePage
    },
    {
        path:'/',
        name:'MainPage',
        component: MainPage
    },
    {
        path:'/:pathMatch(.*)*',
        name:'err 404',
        component: NotFoundPage
    },
    {
        path:'/AddRoute',
        name:'AddRoute',
        component: AddRoute
    },
    {
        path:'/ViewRoute',
        name:'ViewRoute',
        component: ViewRoute
    },
    {
        path: '/Authorization',
        name: 'ProfileAuthorization',
        component: ProfileAuthorization
    },
    {
        path: '/AuthorsProfile',
        name: 'AuthorsProfile',
        component: AuthorsProfile
    }
] 


const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(createYmaps({
    apikey: '95d5e46b-2d2b-4dbc-8676-15f2d7acfb49',
  }));
app.use(router)
app.mount('#app')



// initYmaps(settings).then(() => {
//     const app = createApp(App);
//     


//     
//     app.mount('#app');
//   }).catch(error => {
//     console.error('Ошибка инициализации Яндекс.Карт:', error);
//   });

// const app = createApp(App);
// 




// app.mount('#app')
