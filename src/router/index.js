import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../components/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/info',
        name: 'Info',
        component: () => import('../views/info.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/tableInfo.vue')
      },
      {
        path: '/tree',
        name: 'tree',
        component: () => import('../views/treeTest.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
