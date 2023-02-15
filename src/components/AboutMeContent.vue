<template>
  <v-col class="d-flex pt-0 mb-16">
    <v-col class="pa-0">
      <p class="mt-2 mb-6">
        Hey there! I'm Joseph Galante, but you can just call me Joe. I'm a
        recent graduate from the
        <text-link url="https://www.pitt.edu">
          University of Pittsburgh
        </text-link>
        with a degree in Computer Science and Finance.
      </p>

      <p class="mt-3 mb-6">
        My analytical background is paired with my adventurous spirit, as I love
        to rock climb and explore the great outdoors.
      </p>
      <p class="mb-6">
        Currently, I work as a Software Engineer at
        <text-link url="https://www.ecr.ai">Edge Case Research</text-link>
        , and am always looking for opportunities to grow and new challenges to
        take on.
      </p>

      <p>Here are some technologies in which I consider myself proficient:</p>
      <AboutMeTechStack />
    </v-col>
    <v-col class="mt-2 ml-4 pa-0">
      <v-img src="./headshot_cropped.jpg" alt="headshot"></v-img>
    </v-col>
  </v-col>
</template>

<script>
import AboutMeTechStack from '@/components/AboutMeTechStack.vue'

export default {
  name: 'AboutMeContent',
  components: {
    AboutMeTechStack,
  },
}
</script>

<style scoped lang="css">
.v-img {
  border-radius: 3%;
}
</style>
