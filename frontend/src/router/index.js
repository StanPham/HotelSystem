import { createRouter, createWebHistory } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'
import ReservationView from '../views/ReservationView.vue'
import CreateresView from '../views/CreateresView.vue'
import RoomsView from '../views/RoomsView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import ReviewView from '../views/ReviewView.vue'
import CustomeroutView from '../views/CustomeroutView.vue'

const routes = [
  {
    path: '/room',
    name: 'room',
    component: RoomsView
  },
  {
    path: '/',
    name: 'home',
    component: SigninView
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/customerout',
    name: 'customerout',
    component: CustomeroutView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateresView
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: ReservationView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
