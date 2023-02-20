<template>
  <v-row class="home-info d-flex mx-auto align-center">
    <v-col>
      <div class="text-h4 mb-10 hey">Hey 👋, pleasure to meet you. I'm</div>
      <div class="text-h1 mb-10">Joe Galante.</div>
      <div class="text-h6 mb-10 home-intro">
        I'm a Software Engineer with a passion for learning new stuff. Right
        now, I'm helping ensure autonomous vehicle safety at
        <text-link :url="`https://www.ecr.ai`">Edge Case Research</text-link>
        .
      </div>
      <div>
        <Button :link="'/experience'">Check out my work!</Button>
      </div>
      <div class="scroll-icon text-center">
        <v-icon
          class="animated-icon"
          icon="fas fa-angles-down"
          size="x-large"
        ></v-icon>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button,
  },
  mounted() {
    // make the .scroll-icon vanish using gsap's scrolltrigger when I scroll down a little bit
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.scroll-icon', {
      scrollTrigger: {
        trigger: '.scroll-icon',
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 1,
    })
  },
}
</script>

<style scoped lang="css">
.home-info {
  min-height: 100vh;
  max-width: 1000px;
}

.hey {
  color: #ffb81c;
}

/* put the .scroll-icon at the bottom center of the v-col */
.scroll-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
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

/* STUFF HERE */
.animated-icon {
  animation-name: glow, bounce;
  animation-duration: 4s, 2s;
  animation-iteration-count: infinite, infinite;
  animation-timing-function: linear, ease-in-out;
  border-radius: 50%;
  text-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
}

@keyframes glow {
  0% {
    color: rgba(255, 255, 255, 0.2);
  }
  25% {
    color: rgba(255, 255, 255, 0.6);
  }
  50% {
    color: rgba(255, 255, 255, 1);
  }
  75% {
    color: rgba(255, 255, 255, 0.6);
  }
  100% {
    color: rgba(255, 255, 255, 0.2);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
</style>
