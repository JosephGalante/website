<template>
  <v-container class="home">
    <section class="home-info">
      <div class="text-h4 mb-10 hey">Hey 👋, pleasure to meet you. I'm</div>
      <div class="text-h1 mb-10">Joe Galante.</div>
      <div class="text-h6 mb-10">
        I'm a Software Engineer with a passion for learning new stuff. Right
        now, I'm helping ensure autonomous vehicle safety at
        <a href="https://www.ecr.ai">Edge Case Research</a>. Check out my
        website to learn more about me, or don't. It's your life.
      </div>
      <Button :link="'/experience'">Check out my work!</Button>
    </section>
  </v-container>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button,
  },
}
</script>

<style scoped>
.home {
  color: white;
  max-width: 1600px;
  min-height: 100%;
  padding: 0px 150px;
}

.home-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  max-width: 1000px;
}

.hey {
  color: #ffb81c;
}

a {
  color: #ffb81c;
  display: inline-block;
  position: relative;
  text-decoration: none;
}

a:hover {
  color: #ffffff;
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
