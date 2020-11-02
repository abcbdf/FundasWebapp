<template>
    <v-navigation-drawer
    permanent
    expand-on-hover
    app
    class = "blue"
    >

    <v-list nav two-line>
        <v-list-item >
            <v-list-item-title class = "white--text text-h6">Study Info</v-list-item-title>
        </v-list-item>
        <v-list-item >
            <v-list-item-title class = "student-id pl-3">
                <div class="white--text text-subtitle-1 ">
                    Study Id: 123456
                </div>
                <div class="font-italic white--text text-subtitle-2 font-weight-thin">
                    InService Patient
                </div>
            </v-list-item-title>
        </v-list-item>
        <v-list-item >
            <v-list-item-title class = "white--text text-h6 student-id pa-3">Left Eye</v-list-item-title>
        </v-list-item>
        <v-list-item class="d-flex justify-center" >
            <Eye />
        </v-list-item>
        <v-list-item  class="d-flex justify-center" >
            <v-btn color="blue darken-4" class="white--text rounded-xl text-none" block>
                Change to the other eye
            </v-btn>
        </v-list-item>
    </v-list>
    
    </v-navigation-drawer>
</template>
<script>
import Eye from '@/components/Eye'

export default {
    components: { Eye },
    data() {
        return {
        drawer: false,
        links: [
            { icon: 'dashboard', text: 'Dashboard', route: '/' },
            { icon: 'folder', text: 'My Projects', route: '/projects' },
            { icon: 'person', text: 'Team', route: '/team' },
        ]
        }
    }
}
</script>

<style>
.student-id{
  border-left: 4px solid white;
}
</style>
