import Vue from 'vue'
import Router from 'vue-router'
import HeHome from '@/view/HeHome'

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
                component: () => import('@/view/HeHome/Home')
            },{
                path: 'release',
                name: 'release',
                component: () => import('@/view/HeHome/Release')
            },{
                path: 'identity',
                name: 'identity',
                component: () => import('@/view/HeHome/Identity')
            }]
        }
    ]
})
