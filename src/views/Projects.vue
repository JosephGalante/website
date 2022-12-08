<template>
  <TheNavbar />
  <TheSidebar />
  <div class="projects">
    <h1>Projects</h1>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'Projects',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style></style>
