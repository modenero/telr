import { createRouter, createWebHistory } from 'vue-router'

import DebugView from '../views/DebugView.vue'
// import PayView from '../views/PayView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DebugView,
        },
        // {
        //     path: '/pay',
        //     component: PayView,
        // },
    ]
})

/* Export router. */
export default router
