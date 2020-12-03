<template>
  <div class="about " style="height: 100%; width: 100%">
    <v-stepper :value="-1" style="width: 100%" class="transparent elevation-0" vertical>
      <v-stepper-step step="1" complete class="customStepper" color="white">
        <span class="white--text">
          Ad unit details
        </span>
      </v-stepper-step>
      <v-stepper-content/>
      <v-stepper-step step="2" class="customStepper">
        A
      </v-stepper-step>

      <v-stepper-content/>
  
      <v-stepper-step step="3" :class="['customStepper', (3 > 1) ? 'inactive' : '']">
        Ad templates
      </v-stepper-step>
      
      <v-stepper-content/>

      <v-stepper-step step="3" :class="['customStepper', (3 > 1) ? 'inactive' : '']">
        Ad templates
      </v-stepper-step>
    </v-stepper>
    <!-- <v-stepper
      v-model="e13"
      vertical
    >
      <v-stepper-step
        step="1"
        complete
      >
        Name of step 1
      </v-stepper-step>

      <v-stepper-content>
        
      </v-stepper-content>

      <v-stepper-step
        step="2"
        complete
      >
        Name of step 2
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="e13 = 3"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :rules="[() => false]"
        step="3"
      >
        Ad templates
        <small>Alert message</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="e13 = 4"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">
        View setup instructions
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="e13 = 1"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper> -->
  </div>
  

</template>

<script>

export default {
  components: {  }
}
</script>
