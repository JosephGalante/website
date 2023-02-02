<template>
  <v-container class="home">
    <section class="home-info">
      <div class="text-h4 mb-10 hey">Hey 👋, pleasure to meet you. I'm</div>
      <div class="text-h1 mb-10">Joe Galante.</div>
      <div class="text-h6 mb-10 home-intro">
        I'm a Software Engineer with a passion for learning new stuff. Right
        now, I'm helping ensure autonomous vehicle safety at
        <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>.
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

<style scoped lang="css">
.home {
  color: white;
  width: 100%;
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

@media screen and (min-width: 768.1px) and (max-width: 1024px) {
  .home {
    padding: 0px 110px;
  }

  .hey {
    font-size: 1.5em !important;
  }

  .text-h1 {
    font-size: 2.5em;
  }

  .text-h4 {
    font-size: 1.5em;
  }

  .home-intro {
    font-size: 1em !important;
  }
}

@media screen and (min-width: 500.1px) and (max-width: 768px) {
  .home {
    padding: 0px 30px;
  }

  .hey {
    font-size: 1.5em !important;
  }

  .text-h1 {
    font-size: 2.5em;
  }

  .text-h4 {
    font-size: 1.5em;
  }

  .home-intro {
    font-size: 1em !important;
  }
}

@media screen and (max-width: 500px) {
  .home {
    padding: 0px 15px;
  }

  .hey {
    font-size: 1.5em !important;
  }

  .text-h1 {
    font-size: 2.5em;
  }

  .text-h4 {
    font-size: 1.5em;
  }

  .home-intro {
    font-size: 1em !important;
  }
}
</style>
