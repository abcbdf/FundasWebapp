<template>
    <v-container>
        <v-row>
            <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from left
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
            <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from right
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
            <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from bottom
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from top
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
            <v-col cols = "4" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from center
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
            <v-col cols = "4" class="d-flex flex-column justify-end align-center">
                <v-btn width="100%" color="white" class="blue--text text--darken-4 text-none rounded-pill pa-1" x-large to="/SavePage">
                    Stitch Image
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
    data: () => ({
      width: 600,
    }),
}
</script>