import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/products',
    name: 'products',
    meta: {layout: 'main'},
    component: () => import('../views/Products')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('../views/About')
  },
  {
    path: '/basket',
    name: 'basket',
    meta: {layout: 'main'},
    component: () => import('../views/Basket')
  },
  {
    path: '/basket/delivery',
    name: 'delivery',
    meta: {layout: 'empty'},
    component: () => import('../views/ChangeDeliveryMethod')
  },
  {
    path: '/basket/address',
    name: 'address',
    meta: {layout: 'empty'},
    component: () => import('../views/ChangeDeliveryAddress')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
