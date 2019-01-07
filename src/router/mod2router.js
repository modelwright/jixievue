import Vue from 'vue'
import Router from 'vue-router'
import Wikipedia from '@/pages/Wikipedia'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Wikipedia,
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('@/pages/Wikipedia/Wikipedia')
            }]
        }
    ]
})
