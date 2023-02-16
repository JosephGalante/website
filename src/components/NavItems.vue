<template>
  <ol>
    <NavItem
      v-for="{ text, link } in links"
      :key="link"
      :link="link"
      :text="text"
    ></NavItem>
    <a href="/RESUME-Galante(ECR1).pdf" target="_blank">
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
    const navItems = document.querySelectorAll('li')
    const navItemsArr = Array.from(navItems)
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
    tl.fromTo(
      navItemsArr,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
    )
  },
}
</script>

<style scoped lang="css">
a {
  text-decoration: none;
}
</style>
