import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/h5/m5/mxyh',
  routes
})

export default router
