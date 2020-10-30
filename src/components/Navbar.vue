<template>
    <v-navigation-drawer
    permanent
    expand-on-hover
    app
    class = "blue"
    >

    <v-list nav>
        <v-list-item >
            <v-list-item-title class = "white--text text-h6">Study Info</v-list-item-title>
        </v-list-item>
        <v-list-item >
            <v-list-item-title class = "white--text text-subtitle-1 student-id pa-3">Study Id: 123456</v-list-item-title>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
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
