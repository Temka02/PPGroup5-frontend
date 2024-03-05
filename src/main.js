import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ProfilePage from './components/ProfilePage'
import NotFoundPage from './components/NotFoundPage'


const routes = [
    {
        path:'/',
        name:'ProfilePage',
        component: ProfilePage
    },
    {
        path:'/:pathMatch(.*)*',
        name:'err 404',
        component: NotFoundPage
    },
] 

const router = createRouter({
    history: createWebHistory(), routes
});

const app = createApp(App);
app.use(router)
app.mount('#app')
