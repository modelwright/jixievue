import Vue from 'vue'
import Router from 'vue-router'
import HeHome from '@/pages/HeHome'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: HeHome,
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('@/pages/HeHome/Home')
            },{
                path: 'release',
                name: 'release',
                component: () => import('@/pages/HeHome/Release')
            },{
                path: 'identity',
                name: 'identity',
                component: () => import('@/pages/HeHome/Identity')
            }]
        }
    ]
})
