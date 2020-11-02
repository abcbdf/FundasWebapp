<template>
    <v-container>
        <v-row>
            <v-col cols = "8" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    The image taken from bottom
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
            </v-col>
            <v-col cols = "4" class="d-flex flex-column justify-space-around align-center">
                <div>
                    <v-icon color="white" size="200">
                        mdi-check-circle-outline
                    </v-icon>
                </div>
                <v-btn color="white" class="blue--text rounded-xl" to="/ImageStitch" width="100%">
                    Next Step
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