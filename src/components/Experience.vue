<template>
  <v-row
    class="experience d-flex flex-column justify-content-center py-16 mb-16 mx-auto"
    :class="{
      'py-16 mb-16': isMobile,
    }"
  >
    <ExperienceHeader />
    <ExperienceContent />
  </v-row>
</template>

<script>
import ExperienceHeader from '@/components/ExperienceHeader.vue'
import ExperienceContent from '@/components/ExperienceContent.vue'

export default {
  name: 'Experience',
  components: {
    ExperienceHeader,
    ExperienceContent,
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

@media screen and (max-width: 600px) {
  .experience {
    /* min-height: 600px; */
  }
}
</style>
