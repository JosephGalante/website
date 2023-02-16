<template>
  <ol>
    <NavItem
      v-for="{ text, link } in links"
      :key="link"
      :link="link"
      :text="text"
    ></NavItem>
    <a href="/RESUME-Galante(ECR1).pdf" target="_blank" class="nav-item">
      <Button style="margin-left: 20px" rel="noopener noreferrer">
        Resumé
      </Button>
    </a>
  </ol>
</template>

<script>
import NavItem from '@/components/NavItem.vue'
import Button from '@/components/Button.vue'
import { gsap } from 'gsap'

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
          text: 'About',
          link: 'about',
        },
        {
          text: 'Experience',
          link: 'experience',
        },
        {
          text: 'Projects',
          link: 'projects',
        },
        {
          text: 'Contact',
          link: 'contact',
        },
      ],
    }
  },
  mounted() {
    const navItems = document.querySelectorAll('.nav-item')
    gsap.from(navItems, {
      duration: 1,
      y: -50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    })
  },
}
</script>

<style scoped lang="css">
a {
  text-decoration: none;
}
</style>
