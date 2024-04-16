import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import MainPage from './components/MainPage'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import AddRoute from './components/AddRoute.vue'
import ViewRoute from './components/ViewRoute.vue'
import ProfileAuthorization from './components/ProfileAuthorization.vue'


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
    }
] 

const router = createRouter({
    history: createWebHistory(), routes
});

const app = createApp(App);
app.use(router)
app.mount('#app')
