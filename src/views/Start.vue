<template>
  <v-container fluid>
    <v-row no-gutters align="center">
      <v-col cols="12" class="text-h5 white--text">
        Align the optical disk and the fovea
      </v-col>
      <v-col cols="6">
        <v-row >
          <v-col class="text-subtitle-1 white--text">
            <v-checkbox color="white">
              <template v-slot:label>
                <span class="white--text">Guide Circle</span>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
        <v-row >
          <v-col class="text-subtitle-1 white--text">
            <v-checkbox color="white">
              <template v-slot:label>
                <span class="white--text">Sample Image</span>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="pa-6">
        <p class="text-h5 white--text">
          Be careful!
        </p>
        <p class="text-subtitle-1 white--text font-weight-light">
          Flashing whitelight
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around mb-6">
      <v-btn
        color="white"
        class="ma-2 blue--text rounded-xl"
        to="/ImageTaken"
        height = "100"
        width = "500"
        
      >
        <v-icon
          left
          dark
        >
          mdi-camera
        </v-icon>
        Take an image
        
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>
