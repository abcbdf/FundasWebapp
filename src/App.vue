<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid fill-height :class="`pa-10 flex-column ${color}`">
        <!-- <ProgressBar maxStep=3 :currentStep="currentStep" :key="currentStep" v-if="showProgressBar"/> -->
        <ProgressBar v-if="showProgressBar"/>
        <v-spacer></v-spacer>
        <router-view></router-view>
        <v-spacer></v-spacer>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import controller from '@/utils/Controller.js'

export default {
  components: { Navbar, ProgressBar },
  name: 'App',

  data: () => ({
    // currentStep: 0,
    // pageInfo: {
    //   StartPage: {theme: "dark"},
    //   ImageTakenPage: {theme: "dark"},
    //   ImageStitchPage: {theme: "dark"},
    //   SavePage: {theme: "dark"},
    //   VerifyPage: {theme: "light"},
    //   ChooseEyePage: {theme: "light"},
    //   TurnOffLightPage: {theme: "light"},
    // },
    color: "white",
    showProgressBar: false,
  }),
  created()
  {
    controller.app = this;
  },
  methods:{

  }
  // computed: {
  //   myCurrentStep(){
  //     console.log(this.$router.currentRoute.name);
  //     return this.$router.currentRoute.name;
  //   }
  // },
  // watch: {
  //   '$route' (to, from) {
  //     this.updatePage(to.name);
  //   }
  // },
  // created: function(){
  //   this.updatePage(this.$route.name)
  // },
  // methods: {
  //   updatePage(routeName){
  //     if (routeName === "StartPage")
  //     {
  //       this.currentStep = 0;
  //     }
  //     else if (routeName === "ImageTakenPage")
  //     {
  //       this.currentStep = 1;
  //     }
  //     else if (routeName === "ImageStitchPage")
  //     {
  //       this.currentStep = 2;
  //     }
  //     else if (routeName === "SavePage")
  //     {
  //       this.currentStep = 3;
  //     }

  //     if (this.pageInfo[routeName].theme === "dark")
  //     {
  //       this.color = "blue darken-4";
  //       this.showProgressBar = true;
  //     }
  //     else if (this.pageInfo[routeName].theme === "light")
  //     {
  //       this.color = "white";
  //       this.showProgressBar = false;
  //     }
  //     else
  //     {
  //       console.log("wrong page theme");
  //     }
  //   }
  // }
  // beforeRouteUpdate (to, from, next) {
  //   console.log("hello");
  //   if (to.name === "StartPage")
  //   {
  //     this.currentStep = 0;
  //   }
  //   else if (to.name === "ImageTakenPage")
  //   {
  //     this.currentStep = 1;
  //   }
  //   else if (to.name === "ImageStitchPage")
  //   {
  //     this.currentStep = 2;
  //   }
  //   else if (to.name === "SavePage")
  //   {
  //     this.currentStep = 3;
  //   }

  //   if (this.pageInfo[to.name].theme === "dark")
  //   {
  //     this.color = "blue darken-4";
  //     this.showProgressBar = true;
  //   }
  //   else if (this.pageInfo[to.name].theme === "light")
  //   {
  //     this.color = "white";
  //     this.showProgressBar = false;
  //   }
  //   else
  //   {
  //     console.log("wrong page theme");
  //   }
  // },
};
</script>
