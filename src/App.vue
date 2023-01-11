<template>
  <v-app>
    <TheNavbar />
    <TheSidebar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style lang="css">
.v-application {
  background-color: #000000 !important;
  color: #ffb81c !important;
}
</style>
