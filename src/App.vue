<template>
  <v-app>
    <TheNavbar v-if="!isMobile" />
    <TheNavbarMobile v-else />
    <TheSidebar />
    <v-main>
      <!-- <h1> HELLO THERE</h1> -->
      <!-- homework for next time, have the header block out like a forcefield the content so nothing gets rendered underneath/hidden it -->
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
      // referencing window properties are not reactive, maybe use a watcher? or just find a way to do a better navbar
      // hook up an emit event to the browsers resize property

      // instead of having two components here, have the navbar itself decide which kind of navbar should be rendered. we shouldn't need to know the
      // window width from this component, doesn't make sense

      // think about no matter how they are displayed, the 2 should share the same logic
      // think how I should set up my subcomponents if i decide to split them up, how I can set them up so that they can be reused and NOT DUPLICATED CODE
      return window.innerWidth < 600
    },
  },
}
</script>

<style lang="css">
.v-application {
  background-color: #000000 !important;
  color: #ffb81c !important;
}
</style>
