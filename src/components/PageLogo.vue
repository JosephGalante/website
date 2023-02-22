<template>
  <div>
    <a @click="refreshPage" id="logo">JG</a>
  </div>
</template>

<script>
export default {
  name: 'PageLogo',
  methods: {
    refreshPage() {
      // refresh the page
      window.location.reload()

      // scroll to top of page
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped lang="css">
a {
  text-decoration: none;
  font-size: 3em;
  font-weight: bold;
  color: #ffb81c;
}

a:hover {
  cursor: pointer;
}

@media screen and (min-width: 768.1px) and (max-width: 1024px) {
  a {
    display: flex;
    font-size: 2em;
    align-content: flex-start;
  }
}

@media screen and (max-width: 768px) {
  a {
    display: flex;
    font-size: 2em;
    align-content: flex-start;
  }
}
</style>
