import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

import Index from '@/views/Index.vue'
import Calendar from '@/views/Calendar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const nextStep = (next: () => void, path: string, name: string): void => {
  next()
  store.dispatch('system/setRoute', path)
  store.dispatch('system/setRouteName', name)
}

router.beforeEach((to, from, next) => {
  console.log('router: ' + from.path + ' => ' + to.path)
  store.dispatch('system/setPage', false)
  const name = typeof to.name === 'string' ? to.name : ''
  setTimeout(() => nextStep(next, to.path, name), 600)
})

export default router
