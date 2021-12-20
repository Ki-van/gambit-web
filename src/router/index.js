import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
      guest: true
    },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty',
      guest: true
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'empty',
      guest: true
    },
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
    meta: {
      layout: 'main',
      guest: true
    },
    component: () => import('../views/Contacts')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main',
      guest: true
    },
    component: () => import('../views/About')
  },
  {
    path: '/basket',
    name: 'basket',
    meta: {
      layout: 'main',
      guest: true
    },
    component: () => import('../views/Basket')
  },
  {
    path: '/basket/delivery',
    name: 'delivery',
    meta: {
      layout: 'empty',
      requiresAuth: true
    },
    component: () => import('../views/ChangeDeliveryMethod')
  },
  {
    path: '/basket/delivery/address',
    name: 'address',
    meta: {
      layout: 'empty',
      requiresAuth: true
    },
    component: () => import('../views/ChangeDeliveryAddress')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.is_admin == 1){
          next()
        }
        else{
          next({ name: 'main'})
        }
      }else {
        next()
      }
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
      next({ name: 'main'})
    }
  }else {
    next()
  }
})

export default router
