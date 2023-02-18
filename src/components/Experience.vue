<template>
  <v-row class="experience pt-16 mx-auto">
    <ExperienceHeader />
    <ExperienceContent />
  </v-row>
</template>

<script>
import ExperienceHeader from '@/components/ExperienceHeader.vue'
import ExperienceContent from '@/components/ExperienceContent.vue'
import { gsap } from 'gsap'

export default {
  name: 'Experience',
  components: {
    ExperienceHeader,
    ExperienceContent,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    // use gsap to reveal this component when it is scrolled into view

  }
}
</script>

<style scoped lang="css">
.experience {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  max-width: 1000px;
}
</style>
