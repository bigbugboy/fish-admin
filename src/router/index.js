import Vue from 'vue'
import VueRouter from 'vue-router'

import getCookie from '@/utils/getCookie'


Vue.use(VueRouter)


const routes = [
    {
        path: '/login',
        component: () => import('@/views/Login'),
        meta: { auth: false },
    },
    {
        path: '/',
        component: () => import('@/views/Layout'),
        meta: { title: '首页', auth: true },
        children: [
            {
                path: '/',
                component: () => import('@/views/Home'),
                meta: { title: '首页', auth: true },
            },
            {
                path: '/sc',
                redirect: '/sc/published',
                component: () => import('@/views/SingleChoice'),
                meta: { title: '单选选择', auth: true },
                children: [
                    {
                        path: 'published',  // 也可以写成 /sc/published
                        component: () => import('@/views/SingleChoice/PublishedList'),
                        meta: { title: '已发布', auth: true },
                    },
                    {
                        path: 'unpublished',
                        component: () => import('@/views/SingleChoice/UnPublishedList'),
                        meta: { title: '待发布', auth: true },
                    },
                    {
                        path: 'detail',
                        component: () => import('@/views/SingleChoice/CETemplate'),
                        meta: { title: '详情', auth: true },
                    },
                ]
            },
            {
                path: '/level',
                component: () => import('@/views/Level'),
                meta: { title: '难度等级', auth: true },
            },
            {
                path: '/category',
                component: () => import('@/views/Category'),
                meta: { title: '分类管理', auth: true },
            },
        ]
    }

]


const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth) && to.meta.auth) { // 判断该路由是否需要登录权限
        const token = getCookie('admin_token');
        if (token) { // 获取当前的 token 是否存在
            next();
        } else {
            // 不存在 token，需要重新认证
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
    next();
});


export default router
