import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MessagesList from '../views/MessagesList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/messages',
    name: 'messages',
    component: MessagesList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
