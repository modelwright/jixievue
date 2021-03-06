import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/view/Project'
import ResourcesStore from '@/view/ResourcesStore'
import Mine from '@/view/Mine'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index',
        component: Project,
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/view/Project/Project')
        },{
            path: 'detail',
            name: 'detail',
            component: () => import('@/view/Project/Detail')
        }]
    },{
        path: '/resources',
        component: ResourcesStore,
        redirect: '/resources/resourcesStore',
        children: [{
            path: 'resourcesStore',
            name: 'resourcesStore',
            component: () => import('@/view/ResourcesStore/Resources')
        }]
    },{
        path: '/mine',
        component: Mine,
        redirect: '/mine/mineVip',
        children: [{
            path: 'mineVip',
            name: 'mineVip',
            component: () => import('@/view/Mine/MyVip')
        },{
            path: 'mineSc', 
            name: 'mineSc',
            component: () => import('@/view/Mine/MySc')
        },{
            path: 'mineRecord',
            name: 'mineRecord',
            component: ()=> import('@/view/Mine/MyRecord')
        },{
            path: 'mineManage',
            name: 'mineManage',
            redirect: '/mine/mineManage/mineManageProject',
            component: ()=> import('@/view/Mine/MyManage'),
            children: [{
                path: 'mineManageProject',
                name: 'mineManageProject',
                component: () => import('@/view/Mine/MyManage/Project')
            },{
                path: 'mineManageDetail',
                name: 'mineManageDetail',
                component: () => import('@/view/Mine/MyManage/Detail')
            },{
                path: 'mineManageEnteredList',
                name: 'mineManageEnteredList',
                component: () => import('@/view/Mine/MyManage/EnteredList')
            }]
        },{
            path: 'mineHelpCenter',
            name: 'mineHelpCenter',
            redirect: '/mine/mineHelpCenter/mineHelpCenter',
            component: ()=> import('@/view/Mine/MyManage'),
            children: [{
                path: 'mineHelpCenter',
                name: 'mineHelpCenter',
                component: () => import('@/view/Mine/HelpCenter/HelpCenter')
            },{
                path: 'mineHelpCenterDetail',
                name: 'mineHelpCenterDetail',
                component: () => import('@/view/Mine/HelpCenter/Detail')
            },{
                path: 'mineHelpCenterClassifyList',
                name: 'mineHelpCenterClassifyList',
                component: () => import('@/view/Mine/HelpCenter/ClassifyList')
            }]
        },{
            path: 'mineBannerApply',
            name: 'mineBannerApply',
            redirect: '/mine/mineBannerApply/mineBannerApplySubmitApply',
            component: ()=> import('@/view/Mine/BannerApply'),
            children: [{
                path: 'mineBannerApplySubmitApply',
                name: 'mineBannerApplySubmitApply',
                component: () => import('@/view/Mine/BannerApply/SubmitApply')
            },{
                path: 'mineBannerApplySuccess',
                name: 'mineBannerApplySuccess',
                component: () => import('@/view/Mine/BannerApply/Success')
            }]
        }]
    }]
})
