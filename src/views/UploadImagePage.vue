<template>
  <v-app>
    <v-container fluid fill-height class="pa-10 d-flex flex-column justify-start align-center">
      <div class="mb-5">
        <h1>Please upload image at this page</h1>
      </div>
      <v-btn @click="clearAllHistory">
        <v-icon left>
          mdi-trash-can-outline
        </v-icon> 
        clear all history 
      </v-btn>
      <upload-files v-for="direction in directions" :key="direction" :ref="direction" :direction="direction"/>
      <!-- <upload-files ref="left" direction="left"/>
      <upload-files direction="right"/>
      <upload-files direction="bottom"/>
      <upload-files direction="top"/>
      <upload-files direction="center"/>
      <upload-files direction="stitch"/> -->
    </v-container>
  </v-app>
</template>

<script>
import UploadFiles from "@/components/UploadFiles";

export default {
  name: "App",
  components: {
    UploadFiles,
  },
  data(){
    return {
      directions: ["left", "right", "bottom", "top", "center", "stitch"]
    }
  },
  methods: {
    clearAllHistory()
    {
      // Object.keys(this.$refs).forEach(el => {
      //   console.log(el);
      //   //this.$refs[el][0].clear();
      // });
      for (let ref of this.directions)
      {
        // console.log(ref);
        this.$refs[ref][0].clear();
      }
    }
  }
};
</script>
