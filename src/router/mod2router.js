import Vue from 'vue'
import Router from 'vue-router'
import Wikipedia from '@/view/Wikipedia'

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
                component: () => import('@/view/Wikipedia/Wikipedia')
            },{
                path: 'column',
                name: 'column',
                component: () => import('@/view/Wikipedia/Column')
            },{
                path: 'detail',
                name: 'detail',
                component: () => import('@/view/Wikipedia/Detail')
            },{
                path: 'siteHelp',
                name: 'siteHelp',
                component: () => import('@/view/Wikipedia/SiteHelp')
            },{
                path: 'questions',
                name: 'questions',
                component: () => import('@/view/Wikipedia/Questions')
            },{
                path: 'questionDetail',
                name: 'questionDetail',
                component: () => import('@/view/Wikipedia/QuestionDetail')
            },{
                path: 'releaseSu',
                name: 'releaseSu',
                component: () => import('@/view/Wikipedia/ReleaseSu')
            }]
        }
    ]
})
