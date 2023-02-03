<template>
  <v-col class="poo d-flex pt-0">
    <v-col class="pa-0">
      <p class="mt-2 mb-6">
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
        <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>
        , and am always looking for opportunities to grow and new challenges to
        take on.
      </p>

      <p>Here are some technologies in which I consider myself proficient:</p>
      <div class="fuck justify-content-center">
        <ul>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Go
          </li>

          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            JavaScript (ES6+)
          </li>

          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Python
          </li>

          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Java
          </li>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            R
          </li>
        </ul>
        <ul>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Vue.js
          </li>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Node.js
          </li>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            HTML
          </li>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            CSS
          </li>
          <li>
            <v-icon icon="fas fa-angle-right"></v-icon>
            Docker
          </li>
        </ul>
      </div>
    </v-col>
    <v-col class="mt-2 ml-4 pa-0">
      <img src="@/assets/headshot_cropped.jpg" alt="headshot" />
    </v-col>
  </v-col>
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

ul {
  flex: 1;
  list-style: none;
}

img {
  height: 35%;
  border-radius: 3%;
}

.fuck {
  display: flex;
  justify-content: center;
}

.v-icon {
  color: #ffb81c;
}
</style>
