<template>
  <v-container>
    <v-row>
      <v-col cols = "8" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from {{direction}} 
          <v-btn color="white" fab small class="blue--text rounded-xl" @click="() => {componentKey += 1;}">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </div>
        <v-img :src="serverUrl+direction+'.jpg?rnd='+componentKey" transition="fade-transition"/>
        
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-space-around align-center">
        <div>
          <v-icon color="white" size="200">
            mdi-check-circle-outline
          </v-icon>
        </div>
        <v-btn color="white" class="blue--text rounded-xl" @click="nextPage" width="100%">
          Next Step
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>

<script>
import controller from '@/utils/Controller.js';

export default {
  data: () => ({
    width: 600,
    componentKey: 0,
    serverUrl: controller.serverUrl,
  }),
  computed: {
    direction(){
      let stringArray = this.$controller.progressBarLabel.split(" ");
      return stringArray[stringArray.length - 1];
    }
  },
  methods:{
    nextPage(){
      this.$controller.nextPage();
    }
  },
  // created() {
  //   this.timer = setInterval(() => {this.componentKey += 1;}, 1000);
  // }
}
</script>