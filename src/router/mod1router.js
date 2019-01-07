import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/pages/Project'
import ResourcesStore from '@/pages/ResourcesStore'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index',
        component: Project,
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/pages/Project/Project')
        },{
            path: 'detail',
            name: 'detail',
            component: () => import('@/pages/Project/Detail')
        }]
    },{
        path: '/resources',
        component: ResourcesStore,
        redirect: '/resources/resourcesStore',
        children: [{
            path: 'resourcesStore',
            name: 'resourcesStore',
            component: () => import('@/pages/ResourcesStore/Resources')
        }]
    }]
})
