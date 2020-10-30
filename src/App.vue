<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid fill-height class = "pa-10 blue darken-3">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
