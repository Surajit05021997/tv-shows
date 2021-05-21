import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import ShowDetails from '@/views/ShowDetails.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:searchInput',
    name: 'Search',
    component: Search,
  },
  {
    path: '/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
