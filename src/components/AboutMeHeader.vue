<template>
  <v-col class="d-flex align-center flex-grow-0 poo pb-0">
    <h1 id="about">About Me</h1>
    <v-divider
      class="poo"
      role="presentation"
      :color="'#ffb81c'"
      :thickness="3"
    ></v-divider>
  </v-col>
</template>

<script>
export default {
  name: 'AboutMeHeader',
}
</script>

<style scoped lang="css">
h1 {
  min-width: 150px;
}

.poo {
  width: 100%;
}
</style>
