import Vue from 'vue'
import VueRouter from 'vue-router'
import ImageTakenPage from '@/views/TakeImage/ImageTakenPage.vue';
import ImageStitchPage from '@/views/TakeImage/ImageStitchPage.vue';
import SavePage from "@/views/TakeImage/SavePage.vue";
import VerifyPage from "@/views/TakeImage/VerifyPage.vue";
import StartPage from "@/views/TakeImage/StartPage";
import ChooseEyePage from "@/views/TakeImage/ChooseEyePage";
import TurnOffLightPage from "@/views/TakeImage/TurnOffLightPage";
import TakeImageTemplate from "@/views/TakeImage/TakeImageTemplate";
import UploadImagePage from "@/views/UploadImagePage";
import DashboardPage from "@/views/DashboardPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Dashboard',
  },
  {
    path: '/UploadImage',
    name: 'UploadImage',
    component: UploadImagePage,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/TakeImage',
    name: 'TakeImage',
    component: TakeImageTemplate,
    children: [
      {
        path: 'StartPage',
        name: 'StartPage',
        component: StartPage,
      },
      {
        path: 'ImageTakenPage',
        name: 'ImageTakenPage',
        component: ImageTakenPage
      },
      {
        path: 'ImageStitchPage',
        name: 'ImageStitchPage',
        component: ImageStitchPage
      },
      {
        path: 'SavePage',
        name: 'SavePage',
        component: SavePage
      },
      {
        path: 'VerifyPage',
        name: 'VerifyPage',
        component: VerifyPage,
      },
      {
        path: 'ChooseEyePage',
        name: 'ChooseEyePage',
        component: ChooseEyePage
      },
      {
        path: 'TurnOffLightPage',
        name: 'TurnOffLightPage',
        component: TurnOffLightPage
      },
    ]
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
