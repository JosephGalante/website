<template>
  <v-row class="poo d-flex">
    <v-col class="pa-0">
      <p class="mt-3 mb-6">
        Hey there! I'm is Joseph Galante, but you can just call me Joe. I'm a
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
        <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>,
        and am always looking for opportunities to grow and new challenges to
        take on.
      </p>

      <p>Here are some technologies in which I consider myself proficient:</p>
      <div class="d-flex">
        <ul class="list">
          <li>Go</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript (ES6+)</li>
          <li>C</li>
          <li>Vue.js</li>
        </ul>
        <ul class="list">
          <li>Go</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript (ES6+)</li>
          <li>C</li>
          <li>Vue.js</li>
        </ul>
      </div>
    </v-col>
    <v-col class="ml-4 pa-0">
      <img src="@/assets/headshot_cropped.jpg" alt="headshot" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutMeContent',
}
</script>

<style scoped lang="css">
.poo {
  width: 100%;
}

img {
  width: 90%;
  height: 90%;
  border-radius: 3%;
}
</style>
