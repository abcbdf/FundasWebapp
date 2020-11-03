<template>
  <div style="height: 100%; width: 100%">
    <v-row class="fill-height">
      <v-col cols="12" class="d-flex flex-column justify-space-between align-center">
        <div class="text-h5 font-weight-bold blue--text text--darken-4">
          Select the eye
        </div>
        
        <v-row style="width: 100%; height: 100%">
          <v-col cols="3" class="d-flex flex-column justify-center align-end" >
            <svg width="70" height="348" viewBox="0 0 70 348" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M67.5 3C23.9999 45 12 144.5 23.9999 208C27.4365 226.185 2.99993 208 3 256C3.00006 293 23.9999 324 44.9998 345.5" stroke="#1D1D1D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </v-col>
          <v-col cols="6"  class="d-flex flex-column justify-center align-center" >
            <v-btn-toggle mandatory style="height: 50%; width: 100%" color="grey darken-4" borderless>
              <v-btn height="100%" width="50%" text>
                <div>
                  <div>
                    Right eye
                  </div>
                  <svg width="128" height="80" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C36.085 0 11.8868 16.2538 0 40C11.8913 63.7462 36.085 80 64 80C91.915 80 116.113 63.7462 128 40C116.109 16.2538 91.915 0 64 0ZM95.5551 21.2126C103.075 26.0088 109.447 32.4354 114.234 40C109.447 47.5646 103.075 53.9912 95.5551 58.7874C86.1071 64.8165 75.1913 68.0005 64 68.0005C52.8087 68.0005 41.8929 64.8165 32.4449 58.7874C24.9253 53.9912 18.5528 47.5646 13.7656 40C18.5528 32.4354 24.9253 26.0088 32.4449 21.2126C32.9326 20.901 33.4294 20.5984 33.9262 20.3003C32.6797 23.7146 31.9977 27.4043 31.9977 31.2521C31.9977 48.924 46.3233 63.2539 64 63.2539C81.6767 63.2539 96.0023 48.9285 96.0023 31.2521C96.0023 27.4043 95.3203 23.7191 94.0783 20.3003C94.5751 20.5984 95.0719 20.901 95.5597 21.2126H95.5551ZM64 28.0005C64 34.6302 58.6256 40 52.0003 40C45.3749 40 40.0006 34.6257 40.0006 28.0005C40.0006 21.3752 45.3749 16.0009 52.0003 16.0009C58.6256 16.0009 64 21.3752 64 28.0005Z" fill="#2267B8"/>
                  </svg>
                </div>
              </v-btn>
              <v-btn height="100%" width="50%" text>
                <div>
                  <div>
                    Left eye
                  </div>
                  <svg width="128" height="80" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C36.085 0 11.8868 16.2538 0 40C11.8913 63.7462 36.085 80 64 80C91.915 80 116.113 63.7462 128 40C116.109 16.2538 91.915 0 64 0ZM95.5551 21.2126C103.075 26.0088 109.447 32.4354 114.234 40C109.447 47.5646 103.075 53.9912 95.5551 58.7874C86.1071 64.8165 75.1913 68.0005 64 68.0005C52.8087 68.0005 41.8929 64.8165 32.4449 58.7874C24.9253 53.9912 18.5528 47.5646 13.7656 40C18.5528 32.4354 24.9253 26.0088 32.4449 21.2126C32.9326 20.901 33.4294 20.5984 33.9262 20.3003C32.6797 23.7146 31.9977 27.4043 31.9977 31.2521C31.9977 48.924 46.3233 63.2539 64 63.2539C81.6767 63.2539 96.0023 48.9285 96.0023 31.2521C96.0023 27.4043 95.3203 23.7191 94.0783 20.3003C94.5751 20.5984 95.0719 20.901 95.5597 21.2126H95.5551ZM64 28.0005C64 34.6302 58.6256 40 52.0003 40C45.3749 40 40.0006 34.6257 40.0006 28.0005C40.0006 21.3752 45.3749 16.0009 52.0003 16.0009C58.6256 16.0009 64 21.3752 64 28.0005Z" fill="#2267B8"/>
                  </svg>
                </div>
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="3"  class="d-flex flex-column justify-center align-start" >
            <svg width="70" height="348" viewBox="0 0 70 348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.00002 3C46.5001 45 58.5 144.5 46.5001 208C43.0635 226.185 67.5001 208 67.5 256C67.4999 293 46.5001 324 25.5002 345.5" stroke="#1D1D1D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </v-col>
        </v-row>
        <v-btn color="blue" class="ma-2 white--text rounded-xl text-none "  width="30%" to="/TurnOffLightPage">
          Next
        </v-btn>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  
}
</script>