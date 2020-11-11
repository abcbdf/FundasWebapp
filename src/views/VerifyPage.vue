<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <div class="text-h5 font-weight-bold blue--text text--darken-4 pa-4">
          InService Patient
        </div>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="info in patientInfos"
                :key="info.type"
              >
                <td  class="blue--text text--darken-4">{{ info.type }}</td>
                <td>{{ info.value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-space-between align-left">
        <div>
          <div class="text-h5 font-weight-bold blue--text text--darken-4 pa-4">
            Reservation
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="info in reservationInfos"
                  :key="info.type"
                >
                  <td  class="blue--text text--darken-4">{{ info.type }}</td>
                  <td>{{ info.value }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <v-btn color="blue" class="ma-2 white--text rounded-xl text-none " width="100%" @click="nextPage">
          Confirm
        </v-btn>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>

export default {
  data () {
    return {
      patientInfos: [
        {
          type: 'Full name',
          value: 'Karen Smith',
        },
        {
          type: 'Medical Record No.',
          value: 'U2939849',
        },
        {
          type: 'Insurance',
          value: 'LifeWise',
        },
        {
          type: 'Date of Birth',
          value: 'Jul 26th, 1995',
        },
        {
          type: 'Phone',
          value: '(206)-222-333',
        },
        {
          type: 'Address',
          value: '234 12th Ave NE, WA 98123',
        },
        {
          type: 'Country',
          value: 'United States',
        },
      ],
      reservationInfos: [
        {
          type: 'Study ID',
          value: '123456',
        },
        {
          type: 'Date',
          value: 'Wednesday, Oct 21st',
        },
        {
          type: 'Time',
          value: '10:30 AM',
        },
        {
          type: 'Note',
          value: 'Has diabetes.',
        },
      ],
    }
  },
  methods:{
    nextPage(){
      this.$controller.nextPage();
    }
  }
}
</script>