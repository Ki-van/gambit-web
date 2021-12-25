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
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main',
      guest: true
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/play',
    name: 'play',
    meta: {
      layout: 'main',
      guest: true
    },
    component: () => import('../views/Play')
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
  const authRequired = to.matched.some(record => record.meta.requiresAuth);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
