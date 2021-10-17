import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

import Index from '@/views/Index.vue'
import Calender from '@/views/Calender.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/calender',
    name: 'Calender',
    component: Calender
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(from, to)
  store.dispatch('system/setPage', false)
  store.dispatch('system/setRoute', to.path)
  store.dispatch('system/setRouteName', to.name)
  setTimeout(next, 500)
})

export default router
