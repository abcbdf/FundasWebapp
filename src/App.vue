<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid fill-height class = "pa-10 blue darken-3 flex-column">
        <ProgressBar maxStep=3 :currentStep="currentStep" :key="currentStep" />
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

export default {
  components: { Navbar, ProgressBar },
  name: 'App',

  data: () => ({
    currentStep: 0
  }),
  // computed: {
  //   currentStep(){
  //     console.log(this.$route.name);
  //     return 0;
  //   }
  // }
  watch: {
    '$route' (to, from) {
      if (to.name === "Home")
      {
        this.currentStep = 0;
      }
      else if (to.name === "ImageTaken")
      {
        this.currentStep = 1;
      }
      else if (to.name === "ImageStitch")
      {
        this.currentStep = 2;
      }
      else if (to.name === "FinalImage")
      {
        this.currentStep = 3;
      }
    }
  }
};
</script>
