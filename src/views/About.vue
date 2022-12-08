<template>
  <TheNavbar />
  <TheSidebar />
  <div class="about">
    <h1>About</h1>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'About',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style></style>
