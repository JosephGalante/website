<template>
  <v-container class="home">
    <Home />
    <About />
    <!-- <Experience /> -->
    <!-- <Projects /> -->
    <!-- <Contact /> -->
  </v-container>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Contact from '@/components/Contact.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Site',
  components: {
    Home,
    About,
    Experience,
    Contact,
    Projects,
  },
}
</script>

<style scoped lang="css">
.home {
  color: white;
  background-color: black;
  width: 100%;
  min-height: 100%;
  padding: 0px 150px;
}
</style>
