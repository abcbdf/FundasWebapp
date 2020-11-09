<template>
    <!-- <v-progress-linear
      :value="progress"
      height="25"
      color="white"
    >
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear> -->
  <v-stepper alt-labels value="2" style="width: 100%" class="orange">
    <v-stepper-header>
      <v-stepper-step step="1" complete class="customStepper" color="white">
        <span class="white--text">
          Ad unit details
        </span>
      </v-stepper-step>

      <v-divider color="white" style="width: 100%"></v-divider>

      <v-stepper-step step="2" class="customStepper">
        Ad sizes
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" class="customStepper">
        Ad templates
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<style>
.customStepper{
  flex-basis: unset !important;
  
}
.customStepper .v-icon{
  color: blue !important;
}
</style>


<script>
export default {
    props: ["maxStep", "currentStep"],
//   data() {
//     return {
//         maxStep: 1,
//         currentStep: 1
//     }
//   },
  computed: {
      progress()
      {
        //   console.log("currentStep: " + this.currentStep);
          return 100.0 * this.currentStep / this.maxStep;
      }
  },
}
</script>
