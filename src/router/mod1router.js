import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/pages/Project'
import ResourcesStore from '@/pages/ResourcesStore'
import Mine from '@/pages/Mine'

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
    },{
        path: '/mine',
        component: Mine,
        redirect: '/mine/mineVip',
        children: [{
            path: 'mineVip',
            name: 'mineVip',
            component: () => import('@/pages/Mine/MyVip')
        },{
            path: 'mineSc', 
            name: 'mineSc',
            component: () => import('@/pages/Mine/MySc')
        },{
            path: 'mineRecord',
            name: 'mineRecord',
            component: ()=> import('@/pages/Mine/MyRecord')
        },{
            path: 'mineManage',
            name: 'mineManage',
            redirect: '/mine/mineManage/mineManageProject',
            component: ()=> import('@/pages/Mine/MyManage'),
            children: [{
                path: 'mineManageProject',
                name: 'mineManageProject',
                component: () => import('@/pages/Mine/MyManage/Project')
            },{
                path: 'mineManageDetail',
                name: 'mineManageDetail',
                component: () => import('@/pages/Mine/MyManage/Detail')
            },{
                path: 'mineManageEnteredList',
                name: 'mineManageEnteredList',
                component: () => import('@/pages/Mine/MyManage/EnteredList')
            }]
        }]
    }]
})
