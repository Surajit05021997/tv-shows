import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ShowDetails from '@/views/ShowDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
