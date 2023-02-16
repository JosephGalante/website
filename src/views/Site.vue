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
    // when I scroll to each component such that I can see it, I want to animate the component to appear from the bottom
    // use gsap's scrolltrigger onEnter to do this
    gsap.registerPlugin(ScrollTrigger)

    const aboutComponent = document.querySelector('.aboutComponent')
    const experienceComponent = document.querySelector('.experienceComponent')
    const projectsComponent = document.querySelector('.projectsComponent')
    const contactComponent = document.querySelector('.contactComponent')

    gsap.from(aboutComponent, {
      duration: 0.5,
      y: +50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.62,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutComponent,
        start: 'top 100%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from(experienceComponent, {
      duration: 0.5,
      y: +50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.62,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: experienceComponent,
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from(projectsComponent, {
      duration: 0.5,
      y: +50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.62,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: projectsComponent,
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from(contactComponent, {
      duration: 0.5,
      y: +50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.62,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: contactComponent,
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
    })
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
