import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { withoutLayout: true },
    component: () => import('../views/login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
