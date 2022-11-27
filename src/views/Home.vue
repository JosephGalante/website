<template>
  <TheNavbar />
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar,
  },
}
</script>

<style scoped>
* {
  background-color: red;
}
</style>
