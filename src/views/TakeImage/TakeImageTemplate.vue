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

import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import controller from '@/utils/Controller.js';

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
}
</script>
