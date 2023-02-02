<template>
  <ol>
    <NavItem
      v-for="{ text, link } in links"
      :key="link"
      :link="link"
      :text="text"
    ></NavItem>
    <a href="/RESUME-Galante(ECR1).pdf" target="_blank">
      <Button style="margin-left: 20px">Resumé</Button>
    </a>
  </ol>
</template>

<script>
import NavItem from '@/components/NavItem.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'NavItems',
  components: {
    NavItem,
    Button,
  },
  data() {
    return {
      links: [
        {
          text: 'Home',
          link: 'home',
        },
        {
          text: 'About',
          link: 'about',
        },
        {
          text: 'Experience',
          link: 'experience',
        },
        {
          text: 'Contact',
          link: 'contact',
        },
      ],
    }
  },
}
</script>

<style scoped lang="css">
a {
  text-decoration: none;
}
</style>
