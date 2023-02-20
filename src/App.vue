<template>
  <v-app>
    <TheNavbar v-if="!isMobile"/>
    <TheNavbarMobile v-else/>
    <TheSidebar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheNavbarMobile from '@/components/TheNavbarMobile.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheNavbarMobile,
    TheSidebar,
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600
    }
  }
}
</script>

<style lang="css">
.v-application {
  background-color: #000000 !important;
  color: #ffb81c !important;
}
</style>
