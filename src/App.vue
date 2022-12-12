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
import TheNavbar from '@/components/Navbar/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style scoped lang="css">
.v-application {
  background-color: #000000;
  color: #ffb81c;
}
</style>
