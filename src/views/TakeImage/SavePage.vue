<template>
  <v-container>
    <v-row>
      <v-col cols = "12" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          Final Image
          <v-btn color="white" fab small class="blue--text rounded-xl" @click="() => {componentKey += 1;}">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </div>
        <v-img :src="serverUrl + 'stitch.jpg?rnd='+componentKey">
        </v-img>
        <v-btn width="30%" color="white" class="blue--text text--darken-4 text-none rounded-pill pa-1" @click="nextPage">
          Save the image
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import controller from '@/utils/Controller.js';

export default {
  data: () => ({
    width: 600,
    serverUrl: controller.serverUrl,
    componentKey: 0,
  }),
  methods:{
    nextPage(){
      this.$controller.nextPage();
    }
  }
}
</script>