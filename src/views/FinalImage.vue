<template>
    <v-container>
        <v-row>
            <v-col cols = "12" class="d-flex flex-column justify-space-between align-center">
                <div class="title white--text">
                    Final Image
                </div>
                <v-img src="/FoveaCenter.jpg" :width="width">
                </v-img>
                <v-btn width="30%" color="white" class="blue--text text--darken-4 text-none rounded-pill pa-1" to="/">
                   Save the image
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