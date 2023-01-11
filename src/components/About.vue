<template>
  <v-container class="about pa-0">
    <h1>About Me</h1>
    <section class="d-flex justify-space-between">
      <div class="mr-8">
        <p class="mt-3 mb-6">
          Hey there! My name is Joseph Galante, but you can just call me Joe.
          I'm a recent graduate from the
          <text-link url="https://www.pitt.edu">
            University of Pittsburgh
          </text-link>
          with a degree in Computer Science and Finance. My analytical
          background is paired with my adventurous spirit, as I love to rock
          climb and explore the great outdoors.
        </p>
        <p class="mb-6">
          I also have a passion for music, and have been playing guitar and bass
          for many years. Currently, I work as a Software Engineer at
          <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>,
          and am always looking for new challenges and opportunities to learn
          and grow.
        </p>

        <p>
          I also have a love for travel, as I recently spent a summer
          backpacking through Europe. So if you're looking for someone who can
          climb a mountain and play a tune on the summit or navigate through
          unknown places and make music on the way, I'm your person!
        </p>
      </div>
      <img src="@/assets/headshot_cropped.jpg" alt="headshot" />
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  components: {},
}
</script>

<style scoped lang="css">
img {
  width: 50%;
  height: 50%;
  border-radius: 3%;
}
</style>
