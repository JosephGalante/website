<template>
  <v-row class="about pa-0 mx-auto">
    <AboutMeHeader />
    <AboutMeContent />
  </v-row>
</template>

<script>
import AboutMeHeader from '@/components/AboutMeHeader.vue'
import AboutMeContent from '@/components/AboutMeContent.vue'

export default {
  name: 'About',
  components: { AboutMeHeader, AboutMeContent },
}
</script>

<style scoped lang="css">
.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  max-width: 1000px;
}
</style>
