import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImageTaken from '../views/ImageTaken.vue'
import ImageStitch from '../views/ImageStitch.vue'
import FinalImage from "../views/FinalImage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ImageTaken',
    name: 'ImageTaken',
    component: ImageTaken
  },
  {
    path: '/ImageStitch',
    name: 'ImageStitch',
    component: ImageStitch
  },
  {
    path: '/FinalImage',
    name: 'FinalImage',
    component: FinalImage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
