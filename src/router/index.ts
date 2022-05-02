import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'
const routeroptions:RouterOptions = {
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: () => import('@/pages/HomePage.vue') },
    { path: '/about', component: () => import('@/pages/AboutPage.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFound.vue') }
  ]
}
export default createRouter(routeroptions)
