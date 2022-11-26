<template>
  <v-app>
    <v-main>
      <the-navbar />
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheNavbar,
  },
};
</script>

<style scoped>
nav {
  background-color: #3f51b5;
  color: #fff;
  padding: 1rem;
}
</style>
