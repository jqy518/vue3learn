import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'
const homeModules = import.meta.glob('../pages/HomePage_*.vue')
console.log(homeModules)
const routeroptions: RouterOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: homeModules[`../pages/HomePage_${import.meta.env.VITE_PROJECT}.vue`]
    },
    { path: '/about', component: () => import('@/pages/AboutPage.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
}
export default createRouter(routeroptions)
