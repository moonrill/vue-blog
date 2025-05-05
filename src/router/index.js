import Dashboard from '@/views/Dashboard.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import News from '@/views/News.vue'
import Podcasts from '@/views/Podcasts.vue'
import Resources from '@/views/Resources.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/podcasts',
    name: 'Podcasts',
    component: Podcasts,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    hideNavbar: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
