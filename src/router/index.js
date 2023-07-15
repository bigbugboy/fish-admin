import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        path: '/',
        component: () => import('@/views/Layout'),
        meta: {title: '首页'},
        children: [
            {
                path: '/',
                component: () => import('@/views/Home'),
                meta: {title: '首页'},
            },
            {
                path: '/sc',
                redirect: '/sc/published',
                component: () => import('@/views/SingleChoice'),
                meta: {title: '单选选择'},
                children: [
                    {
                        path: 'published',  // 也可以写成 /sc/published
                        component: () => import('@/views/SingleChoice/PublishedList'),
                        meta: {title: '已发布'},
                    },
                    {
                        path: 'unpublished',
                        component: () => import('@/views/SingleChoice/UnPublishedList'),
                        meta: {title: '待发布'},
                    },
                    {
                        path: 'detail', 
                        component: () => import('@/views/SingleChoice/CETemplate'),
                        meta: {title: '详情'},
                    },
                ]
            },
            {
                path: '/level',
                component: () => import('@/views/Level'),
                meta: {title: '难度等级'},
            },
            {
                path: '/category',
                component: () => import('@/views/Category'),
                meta: {title: '分类管理'},
            },
        ]
    }

]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
