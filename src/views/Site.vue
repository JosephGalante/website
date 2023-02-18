<template>
  <v-container class="home">
    <Home class="homeComponent mb-3" />
    <About class="aboutComponent" />
    <Experience class="experienceComponent" />
    <Projects class="projectsComponent" />
    <Contact class="contactComponent" />
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Site',
  components: {
    Home,
    About,
    Experience,
    Projects,
    Contact,
    Footer,
  },
  mounted() {
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
