<template>
  <v-container>
    <v-row>
      <v-col cols = "8" class="d-flex flex-column justify-space-between align-center">
        <div class="title white--text">
          The image taken from {{direction}}
        </div>
        <v-img src="/FoveaCenter.jpg" :width="width">
        </v-img>
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

<script>

export default {
  data: () => ({
    width: 600,
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
  }
}
</script>