import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/pages/Project'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Project,
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('@/pages/Project/Project')
            }]
        }
    ]
})
