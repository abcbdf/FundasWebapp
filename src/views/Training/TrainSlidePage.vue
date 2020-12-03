<template>
  <v-container fluid>
    <v-row>
      <v-col class="secondary--text font-weight-bold text-h4 text-center" cols="12">
        Training for non-medical operators
      </v-col>
    </v-row>
    <v-row class="pt-10">
      <v-col class="font-weight-medium text-h6 text-center active-tab" cols="6">
        Tutorial 1
      </v-col>
      <v-col class="font-weight-medium text-h6 text-center" cols="6">
        Tutorial 2
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="/fundusTrain.png"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  
}
</script>

<style>
.active-tab{
  border-bottom: 4px solid var(--v-secondary-base);
}
</style>

