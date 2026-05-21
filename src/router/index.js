import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import GamesPage from '../pages/GamesPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ConnectPage from '../pages/ConnectPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/games',
    component: GamesPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/connect',
    component: ConnectPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})
