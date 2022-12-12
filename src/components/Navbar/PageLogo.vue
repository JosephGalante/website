<template>
  <div>
    <router-link :to="'home'" id="logo">JG</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageLogo',
}
</script>

<style scoped lang="css">
a {
  text-decoration: none;
  font-size: 3em;
  font-weight: bold;
  color: #ffb81c;
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
