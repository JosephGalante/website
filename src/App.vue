<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="css">
.v-application {
  background-color: #000000;
  color: #ffb81c;
}
</style>
