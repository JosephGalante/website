<template>
  <v-row class="d-flex align-center poo">
    <h1>About Me</h1>
    <v-divider
      role="presentation"
      :color="'#ffb81c'"
      :thickness="3"
      :length="'500'"
    ></v-divider>
  </v-row>
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
