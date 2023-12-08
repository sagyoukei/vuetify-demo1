import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputerView from '../views/ComputerView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import HomepageView from '../views/HomepageView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/computer',
    name: 'computer',
    component: ComputerView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogListView
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: BlogDetailView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomepageView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
