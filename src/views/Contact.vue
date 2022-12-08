<template>
  <TheNavbar />
  <TheSidebar />
  <div class="contact">
    <h1>Contact</h1>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'Contact',
  components: {
    TheNavbar,
    TheSidebar,
  },
}
</script>

<style></style>
