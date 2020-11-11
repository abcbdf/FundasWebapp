<template>
    <!-- <v-progress-linear
      :value="progress"
      height="25"
      color="white"
    >
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear> -->
  <v-stepper alt-labels :value="-1" style="width: 100%" class="transparent elevation-0">
    <v-stepper-header>
      <!-- <v-stepper-step step="1" complete class="customStepper" color="white">
        <span class="white--text">
          Ad unit details
        </span>
      </v-stepper-step>

      <v-divider class="thickDivider white"></v-divider>

      <v-stepper-step step="2" class="customStepper">
        A
      </v-stepper-step>

      <v-divider class="thickDivider secondary"></v-divider>
      <v-stepper-step step="3" :class="['customStepper', (3 > 1) ? 'inactive' : '']">
        Ad templates
      </v-stepper-step>
      <v-divider class="thickDivider secondary"></v-divider>
      <v-stepper-step step="3" :class="['customStepper', (3 > 1) ? 'inactive' : '']">
        Ad templates
      </v-stepper-step> -->
      <template v-for="(_, idx) in maxStep">
        <v-stepper-step :step="idx + 1" :complete="idx < currentStep" :class="['customStepper', idx > currentStep ? 'inactive': '']" :color="idx < currentStep? 'white' : ''" :key="`${idx}-step`">
          <span class="white--text" v-if="idx == currentStep">
            {{label}}
          </span>
        </v-stepper-step>
        <v-divider :class="['thickDivider', (idx < currentStep) ? 'white' : 'secondary']" v-if="idx !== maxStep - 1" :key="idx"></v-divider>
      </template>
    </v-stepper-header>
  </v-stepper>
</template>

<style>
.customStepper{
  flex-basis: 160px !important;
}

.customStepper .v-icon{
  color: var(--v-primary-base) !important;
}

.customStepper .v-stepper__step__step{
  background: white !important;
  color: var(--v-primary-base) !important;
}

.customStepper.inactive .v-stepper__step__step{
  background: var(--v-primary-base) !important;
  color: var(--v-secondary-base) !important;
  border: 2px solid var(--v-secondary-base) !important;
}
.thickDivider{
  border-top-width: medium !important;
}
</style>


<script>

export default {
    // props: ["maxStep", "currentStep"],
  data() {
    return {
        // label: "",
        // currentStep: 1,
        // maxStep: 1,
    }
  },
  computed: {
    // progress()
    // {
    //   //   console.log("currentStep: " + this.currentStep);
    //     return 100.0 * this.currentStep / this.maxStep;
    // }
    currentStep()
    {
      console.log(this.$controller.progressBarCurrentStep);
      return this.$controller.progressBarCurrentStep;
    },
    maxStep()
    {
      return this.$controller.progressBarMaxStep;
    },
    label()
    {
      return this.$controller.progressBarLabel;
    }

  },
}
</script>
