// src/router/index.js or src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Details from '../pages/Details.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/details', component: Details }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
