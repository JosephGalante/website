<template>
  <v-row
    fill-height
    class="footer d-flex flex-column align-center justify-content-center"
  >
    <div class="flex-shrink-1">
      Built by Joe Galante & Designed by Garrett Bonfanti
    </div>

    <div class="d-flex align-center">
      <v-icon class="mr-1" icon="fa-regular fa-star" size="x-small"></v-icon>
      <span class="mr-3">14</span>
      <v-icon class="mr-1" icon="fa-solid fa-code-fork" size="x-small"></v-icon>
      <span class="mr-3">2</span>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="css"></style>
