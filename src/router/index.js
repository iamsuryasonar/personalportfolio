import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NavBar from '../components/NavBar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/navbar',
    name: 'NavBar',
    component: NavBar,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
