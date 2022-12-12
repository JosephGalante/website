<template>
  <v-btn variant="outlined" color="secondary" @click="goToPage">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
    }
  },
  methods: {
    goToPage() {
      console.log(this.link);
      if (this.link !== undefined) {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style scoped lang="css">
.v-btn {
  font-size: 1em !important; 
  text-transform: none !important;
  padding: 15px 25px 35px 25px !important;
}

.v-btn:hover {
  background-color: rgba(255, 184, 28, 0.2);
}
</style>