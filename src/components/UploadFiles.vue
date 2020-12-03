<template>
  <div style="width: 100%">
    <div v-if="currentFile">
      <div>
        <v-progress-linear
          v-model="progress"
          color="light-blue"
          height="25"
          reactive
        >
          <strong>{{ progress }} %</strong>
        </v-progress-linear>
      </div>
    </div>

    <v-row no-gutters justify="center" align="center">
      <v-col cols="8">
        <v-file-input
          show-size
          :label='"The image from " + direction'
          @change="selectFile"
          prepend-icon="mdi-camera"
        ></v-file-input>
      </v-col>

      <v-col cols="4" class="pl-2">
        <v-btn color="success" dark small @click="upload">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card v-if="fileInfos.length > 0" class="mx-auto">
      <v-list>
        <v-subheader>List of Files</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(file, index) in fileInfos" :key="index">
            <a :href="file.url">{{ file.name }}</a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import UploadService from "@/utils/UploadFilesService";

export default {
  name: "upload-files",
  props: ["direction"],
  data() {
    return {
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  },
  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    upload() {
      if (!this.currentFile) {
        this.message = "Please select a file!";
        return;
      }

      this.message = "";

      UploadService.upload(this.currentFile, this.direction + ".jpg", (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return UploadService.getFiles(this.direction);
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });
    },
    clear(){
      UploadService.clear(this.direction).then((response) =>{
        console.log("update");
        return UploadService.getFiles(this.direction);
      }).then((files) => {
        
        this.fileInfos = files.data;
      });
    }
  },
  mounted() {
    UploadService.getFiles(this.direction).then((response) => {
      this.fileInfos = response.data;
    });
  },
  created(){
    
  }
};
</script>
