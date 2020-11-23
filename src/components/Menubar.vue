<template>
  <v-navigation-drawer permanent app class = "primary py-5"  width="100" fill-height>
    <v-row style="height: 100%">
      <v-col class=" d-flex flex-column justify-space-between">
        <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center">
          <v-img src="/MicrosoftLogo.png" width="50"/>
          <div class="white--text text-body-1"> Direct </div>
        </v-card>
        <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center" v-for="link in links" :key="link.text" color="white" >
          <v-icon color="secondary" large>{{link.icon}}</v-icon>
          <div class="secondary--text text-body-2"> {{link.text}} </div>
        </v-card>

        <!-- <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center">
          <v-icon color="secondary" large>mdi-monitor-dashboard</v-icon>
          <div class="secondary--text text-body-1"> Dashboard </div>
        </v-card>
        <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center">
          <v-icon color="secondary" large>mdi-help-circle</v-icon>
          <div class="secondary--text text-body-1"> Introductions </div>
        </v-card>
        <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center">
          <v-icon color="secondary" large>mdi-chart-pie</v-icon>
          <div class="secondary--text text-body-1"> Data Collection </div>
        </v-card>
        <v-card class="transparent elevation-0 d-flex flex-column justify-center align-center">
          <v-icon color="secondary" large>mdi-account-multiple</v-icon>
          <div class="secondary--text text-body-1"> Operators </div>
        </v-card> -->
      </v-col>
    </v-row>

  
  </v-navigation-drawer>
</template>
<script>

export default {
  
  data() {
    return {
    drawer: false,
    links: [
      { icon: 'mdi-monitor-dashboard', text: 'Dashboard'},
      { icon: 'mdi-help-circle', text: 'Introductions'},
      { icon: 'mdi-chart-pie', text: 'Data Collection'},
      { icon: 'mdi-account-multiple', text: 'Operators'},
      { icon: 'mdi-account-multiple', text: 'Patients'},
      { icon: 'mdi-cog', text: 'Settings'},
      { icon: 'mdi-logout', text: 'Logout'},
    ]
    }
  },
  methods: {
    mouseover()
    {
      console.log("hh");
    }
  }
}
</script>

<style>



</style>
