import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(from, to)
  store.dispatch('system/setPage', false)
  setTimeout(next, 600)
})

export default router
