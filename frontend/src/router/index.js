import { createRouter, createWebHistory } from 'vue-router'

import RoomsView from '../views/RoomsView.vue'

const routes = [
  {
    path: '/room',
    name: 'room',
    component: RoomsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
