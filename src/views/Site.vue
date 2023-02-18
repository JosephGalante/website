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
    // use gsap to reveal these individual components when I scroll to them
    // scroll to the top of the page
    window.scrollTo(0, 0)

    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.homeComponent', {
      scrollTrigger: {
        trigger: '.homeComponent',
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 2,
      y: 100,
    })

    gsap.from('.aboutComponent', {
      scrollTrigger: {
        trigger: '.aboutComponent',
        start: 'top 70%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 2,
      y: 100,
    })

    gsap.from('.experienceComponent', {
      scrollTrigger: {
        trigger: '.experienceComponent',
        start: 'top 70%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 2,
      y: 100,
    })

    gsap.from('.projectsComponent', {
      scrollTrigger: {
        trigger: '.projectsComponent',
        start: 'top 70%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 1,
      y: 100,
    })

    gsap.from('.contactComponent', {
      scrollTrigger: {
        trigger: '.contactComponent',
        start: 'top 70%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 1,
      y: 100,
    })
    window.scrollTo(0, 0)
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
