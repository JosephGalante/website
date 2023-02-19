<template>
  <v-row class="home-info mx-auto">
    <v-col class="text-h4 mb-10 hey">Hey 👋, pleasure to meet you. I'm</v-col>
    <v-col class="text-h1 mb-10 name">Joe Galante.</v-col>
    <v-col class="text-h6 mb-10 home-intro">
      I'm a Software Engineer with a passion for learning new stuff. Right now,
      I'm helping ensure autonomous vehicle safety at
      <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>
      .
    </v-col>
    <v-col class="checkout">
      <Button :link="'/experience'">Check out my work!</Button>
    </v-col>
    <v-col class="d-flex justify-center align-center">
      <v-icon icon="fas fa-angles-down" size="x-large"></v-icon>
    </v-col>
  </v-row>
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
.v-col {
  flex-grow: 0;
}

.home-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 1000px;
}

.hey {
  color: #ffb81c;
}

@media screen and (min-width: 768.1px) and (max-width: 1024px) {
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
