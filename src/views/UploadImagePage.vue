<template>
  <v-app>
    <v-container fluid fill-height class="pa-10 d-flex flex-column justify-start align-center">
      <div class="mb-5">
        <h1>Please upload image at this page</h1>
      </div>

      <upload-files direction="left"/>
      <upload-files direction="right"/>
      <upload-files direction="bottom"/>
      <upload-files direction="top"/>
      <upload-files direction="center"/>
      <upload-files direction="stitch"/>
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
};
</script>
