<template>
  <v-row class="experience d-flex flex-column justify-content-center mx-auto">
    <ExperienceHeader />
  </v-row>
</template>

<script>
import ExperienceHeader from '@/components/ExperienceHeader.vue'

export default {
  name: 'Experience',
  components: {
    ExperienceHeader,
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600
    },
  },
}
</script>

<style scoped lang="css">
.experience {
  align-items: flex-start;
  max-width: 1000px;
}
</style>
