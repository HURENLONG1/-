import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: () => import( '../views/details/details.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/Login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import( '../views/reg/reg.vue')
  },
]

const router = new VueRouter({
  linkActiveClass: 'tab-active',
  routes,
  mode: "history",//默认是哈希模式，现在将其更改为history模式
})

export default router
