<template>
  <header>
    <nav>
      <PageLogo />
      <div class="hi">
        <NavItems />
      </div>
    </nav>
  </header>
</template>

<script>
import Button from '@/components/Button.vue'
import NavItems from '@/components/NavItems.vue'
import PageLogo from '@/components/PageLogo.vue'

export default {
  name: 'TheNavbar',
  components: {
    Button,
    NavItems,
    PageLogo,
  },
}
</script>

<style scoped lang="scss">
header {
  padding: 0px 50px;
  width: 100%;
  background-color: #000000;
  color: #ffb81c;
  position: fixed;
  z-index: 2;
}

nav {
  display: flex;
  padding: 10px 20px 10px 20px;
  justify-content: space-between;
}

div {
  margin: 0px 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

@media screen and (min-width: 768.1px) and (max-width: 1024px) {
  header {
    padding: 0px 50px;
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 0px;
    margin: 0px;
  }

  .hi {
    display: none;
  }
}
</style>
