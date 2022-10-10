import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Concierge from '../views/Concierge.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/concierge',
        name: 'Concierge',
        component: Concierge
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})

export default router
