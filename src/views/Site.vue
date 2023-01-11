<template>
  <Home />
  <About />
  <!-- <Experience /> -->
  <!-- <Projects /> -->
  <!-- <Contact /> -->
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

</style>
