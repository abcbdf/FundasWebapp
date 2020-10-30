<template>
    <v-progress-linear
      :value="progress"
      height="25"
      color="white"
    >
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
</template>
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
