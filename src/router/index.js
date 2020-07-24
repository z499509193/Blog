import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import flie from '../views/flie.vue'
import foreEnd from '../views/foreEnd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flie',
    name: 'flie',
    component: flie
  },
  {
    path: '/foreEnd',
    name: 'foreEnd',
    component: foreEnd
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
