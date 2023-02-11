import { createRouter, createWebHistory } from 'vue-router'

import MainView from '../views/MainView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainView,
        },
        {
            path: '/about',
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
