import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImageTakenPage from '../views/ImageTakenPage.vue'
import ImageStitchPage from '../views/ImageStitchPage.vue'
import SavePage from "../views/SavePage.vue"
import VerifyPage from "../views/VerifyPage.vue"
import StartPage from "@/views/StartPage"
import ChooseEyePage from "@/views/ChooseEyePage"
import TurnOffLightPage from "@/views/TurnOffLightPage";
import App from "@/App.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/StartPage',
    name: 'StartPage',
    component: StartPage,
  },
  {
    path: '/ImageTakenPage',
    name: 'ImageTakenPage',
    component: ImageTakenPage
  },
  {
    path: '/ImageStitchPage',
    name: 'ImageStitchPage',
    component: ImageStitchPage
  },
  {
    path: '/SavePage',
    name: 'SavePage',
    component: SavePage
  },
  {
    path: '/',
    name: 'VerifyPage',
    component: VerifyPage,
    alias: "/VerifyPage",
  },
  {
    path: '/ChooseEyePage',
    name: 'ChooseEyePage',
    component: ChooseEyePage
  },
  {
    path: '/TurnOffLightPage',
    name: 'TurnOffLightPage',
    component: TurnOffLightPage
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
