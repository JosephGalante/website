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
        Currently, I'm looking for a new opportunity as a Software Engineer. If
        you're looking for a passionate and eager to learn developer, feel free
        to reach out to me at the link at the bottom of the page.
      </p>

      <p>Here are some technologies in which I consider myself proficient:</p>
      <AboutMeTechStack />
    </v-col>
    <v-col class="mt-2 mx-auto pa-0 fixed headshot">
      <v-img
        src="./headshot_cropped.jpg"
        alt="Joe Galante profile picture"
        ref="target"
        :style="{
          transform: imgTransform,
          transition: 'transform 0.25s ease-out',
        }"
        @mouseover.native="mouseOver"
        @mouseleave.native="mouseLeave"
        :gradient="gradient"
      ></v-img>
    </v-col>
  </v-col>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const AboutMeTechStack = defineAsyncComponent(() =>
  import('@/components/AboutMeTechStack.vue')
)

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)

const imgTransform = computed(() => {
  const MAX_ROTATION = 7
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2)
  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

const gradient = ref(
  'to top, rgba(255, 187, 28, 0.25), rgba(255, 187, 28, 0.25)'
)

function mouseOver() {
  gradient.value = ''
}

function mouseLeave() {
  gradient.value = 'to top, rgba(255, 187, 28, 0.25), rgba(255, 187, 28, 0.25)'
}
</script>

<style scoped lang="css">
.v-img {
  border-radius: 3%;
}

/* Right now, the two nested v-cols are side by side. However, when the screen width
is less than 600px, I want the nested v-cols to be viewed one on top of the other */
@media screen and (max-width: 600px) {
  .v-col {
    flex-direction: column;
  }

  /* Give the .headshot a margin top of 30px */
  .headshot {
    margin-top: 30px !important;
  }
}
</style>
