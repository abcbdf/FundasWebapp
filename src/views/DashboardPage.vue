<template>
  <v-app>
    <Menubar />
    <v-main>
      <v-container fluid fill-height class="px-10">
        <v-row style="width: 100%;" class="justify-center">
          <v-col cols="2" class="d-flex flex-column justify-center align-center">
            <!-- <v-icon color="secondary" left>mdi-map-marker</v-icon>
            <span>
              SLU Clinic
            </span> -->
            <v-btn class="transparent elevation-0 secondary--text text-none">
              <v-icon left dark color="secondary">
                mdi-map-marker
              </v-icon>
              SLU Clinic
              <v-icon right dark color="secondary">
                mdi-menu-down
              </v-icon>
            </v-btn>
          </v-col>
          <v-spacer/>
          <v-col cols="1" class="d-flex flex-column justify-center align-center">
            <v-btn class="transparent text-none font-italic elevation-0" fab x-small>
              <v-icon dark color="secondary">
                mdi-magnify
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1" class="d-flex flex-column justify-center align-center">
            <v-btn class="transparent text-none font-italic elevation-0" fab x-small>
              <v-icon dark color="secondary">
                mdi-bell
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2" class="d-flex flex-column justify-center align-center">
            <v-avatar>
              <img src="/doctor.jpg"/>
            </v-avatar>
            <div class="text-body-2">
              Volunteer- Aaron
            </div>
            <div class="text-body-2 font-weight-thin">
              No.993736292
            </div>
          </v-col>
        </v-row>
        <v-row style="width: 100%;" class="px-10">
          <v-col cols="12">
            <v-row>
              <v-col class="secondary--text font-weight-bold text-h6">
                Dashboard
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card class="pa-5" style="height: 100%">
                  <div class="d-flex justify-space-between align-center font-weight-bold">
                    <span>
                      Pending eye tests
                    </span>
                    <span class="secondary--text">
                      60/100
                    </span>
                  </div>
                  <div class="text-h4 red--text d-flex justify-center pa-5">
                    60
                  </div>
                </v-card>
              </v-col>
              
              <v-col cols="4">
                <v-card class="pa-5" style="height: 100%">
                  <div class="d-flex justify-space-between align-center font-weight-bold">
                    <span>
                      Pending eye tests
                    </span>
                    <span class="secondary--text">
                      60/100
                    </span>
                  </div>
                  <div class="text-h4 secondary--text d-flex justify-center pa-5">
                    40
                  </div>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card class="pa-5" style="height: 100%">
                  <div class=" font-weight-bold">
                      Improve your experience
                  </div>
                  <div class="text-body-2 font-italic font-weight-thin text-center">
                      How was your experience with last eye exam?
                  </div>
                  <v-row class="justify-space-between">
                    <v-btn color="secondary" class="ma-2 white--text rounded-xl text-none " width="30%">
                      Easy
                    </v-btn>
                    <v-btn color="secondary" class="ma-2 white--text rounded-xl text-none " width="30%">
                      Difficult
                    </v-btn>
                  </v-row>
                  
                </v-card>
              </v-col>
            </v-row>
            <v-row class="justify-space-between">
              <v-col cols="6" class="pr-10">
                <v-row style="height:20%;">
                  <v-col class="secondary--text font-weight-bold text-h6 d-flex justify-space-between align-center" cols="8">
                    Upcoming appointments
                  </v-col>
                  <v-col cols="4" class="d-flex justify-space-between align-center">
                    <v-btn color="secondary" class="ma-2 white--text rounded-xl text-none " block>
                      <v-icon left color="white">mdi-plus</v-icon>
                      New
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card class="elevation-15 pa-5">
                      <v-row>
                        <v-col cols="2">
                          <v-avatar> <img src="/doctor.jpg"/> </v-avatar>
                        </v-col>
                        <v-col>
                          <div class="font-weight-bold">
                            Amy Walker
                          </div>
                          <div class="font-italic font-weight-thin">
                            Study Id : 22842866 | InService patient
                          </div>
                        </v-col>
                        <v-spacer/>
                        <v-col class="d-flex justify-space-between align-center">
                          <v-btn class="transparent elevation-0 red--text text-none font-italic" :to='{name: "VerifyPage"}'>
                            Ongoing
                            <v-icon right dark color="secondary">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row v-for="appointment in appointments" :key="appointment.name">
                        <v-col cols="2">
                          <v-avatar> <img src="/doctor.jpg"/> </v-avatar>
                        </v-col>
                        <v-col>
                          <div class="font-weight-bold">
                            {{appointment.name}}
                          </div>
                          <div class="font-italic font-weight-thin">
                            Study Id : 22842866 | InService patient
                          </div>
                        </v-col>
                        <v-spacer/>
                        <v-col class="d-flex justify-space-between align-center">
                          <v-btn class="transparent elevation-0 text-none font-italic">
                            {{appointment.time}}
                            <v-icon right dark color="secondary">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  
                </v-row>
              </v-col>
              <!-- completed eye tests -->
              <v-col cols="6" class="pl-10">
                <v-row  style="height:20%;">
                  <v-col class="secondary--text font-weight-bold text-h6 d-flex justify-space-between align-center" cols="8">
                    Completed eye tests
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card class="elevation-15 pa-5">
                      <v-row v-for="index in 4" :key="index">
                        <v-col>
                          <div class="font-weight-bold">
                            DR Stage ||
                          </div>
                          <div class="font-italic font-weight-thin">
                            Study Id : 22842866 | InService patient
                          </div>
                        </v-col>
                        <v-spacer/>
                        <v-col class="d-flex justify-space-between align-center" cols="1">
                          <v-btn class="secondary text-none font-italic" fab x-small>
                            <v-icon dark color="white">
                              mdi-phone-in-talk
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="d-flex justify-space-between align-center" cols="1">
                          <v-btn class="secondary text-none font-italic" fab x-small>
                            <v-icon dark color="white">
                              mdi-email-send
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="d-flex justify-space-between align-center" cols="1">
                          <v-btn class="white text-none font-italic" fab x-small>
                            <v-icon dark color="secondary">
                              mdi-dots-horizontal
                            </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Menubar from '@/components/Menubar';

export default {
  components: { Menubar },
  name: 'App',

  data: () => ({
    appointments: [
      {name: "Patrycja Karabinus", time: "10:30 AM"},
      {name: "Matthew Ross", time: "11:00 AM"},
      {name: "Justin Ho", time: "12:30 PM"}, 
    ]
  }),
  created()
  {
    
  },
  methods:{

  }
}
</script>
