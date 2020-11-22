<template>
  <v-container>
    <v-row>
      <!-- <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from left
        </div>
        <v-img :src="serverUrl + 'left.jpg'" :width="width">
        </v-img>
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from right
        </div>
        <v-img :src="serverUrl + 'right.jpg'" :width="width">
        </v-img>
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from bottom
        </div>
        <v-img src="/FoveaCenter.jpg" :width="width">
        </v-img>
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from top
        </div>
        <v-img src="/FoveaCenter.jpg" :width="width">
        </v-img>
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from center
        </div>
        <v-img src="/FoveaCenter.jpg" :width="width">
        </v-img>
      </v-col> -->
      <v-col cols = "4" class="d-flex flex-column justify-space-between align-center" v-for="direction in directionList" :key="direction">
        <div class="title white--text">
          The image taken from {{direction}}
        </div>
        <v-img :src="serverUrl + direction + '.jpg'" max-height="300" max-width="300">
        </v-img>
      </v-col>
      <v-col cols = "4" class="d-flex flex-column justify-end align-center">
        <v-btn width="100%" color="white" class="blue--text text--darken-4 text-none rounded-pill pa-1" x-large @click="nextPage">
          Stitch Image
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
    directionList: ['left', 'right', 'bottom', 'top', 'center']
  }),
  methods:{
    nextPage(){
      this.$controller.nextPage();
    }
  }
}
</script>