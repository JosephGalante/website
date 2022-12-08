<template>
  <TheNavbar />
  <TheSidebar />
  <div class="home">
    <h1>Home</h1>
    <p>Hey, I'm Joe Galante. I love to code.</p>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style scoped>

</style>
