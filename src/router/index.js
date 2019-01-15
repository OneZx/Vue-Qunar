import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ],
    // 让路由切换的时候始终显示再最顶部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
