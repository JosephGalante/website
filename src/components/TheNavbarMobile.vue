<template>
  <div>
    <v-app-bar color="primary" prominent>
      <transition name="spin">
        <v-app-bar-nav-icon
          ref="hamburgerIcon"
          variant="text"
          @mousedown="toggleClick"
          :class="{ 'is-open': isClicked, 'is-closed': !isClicked }"
        ></v-app-bar-nav-icon>
      </transition>
    </v-app-bar>
    <v-navigation-drawer
      app
      flat
      v-model="isClicked"
      location="left"
      style="height: 100%"
      color="#111111"
    >
      <v-list>
        <v-list-item class="ml-2" v-for="item in links" :key="item.link">
          <li @click="scrollTo(item.link)">{{ item.text }}</li>
        </v-list-item>
        <v-list-item>
          <a href="/RESUME-Galante(ECR1).pdf" target="_blank" class="nav-item">
            <Button rel="noopener noreferrer" class="ml-2">Resumé</Button>
          </a>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'TheNavbarMobile',
  components: {
    Button,
  },
  data() {
    return {
      isClicked: false,
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
  methods: {
    toggleClick() {
      this.isClicked = !this.isClicked
    },
    scrollTo(itemId) {
      const elem = document.getElementById(`${itemId}`)
      elem.scrollIntoView({ behavior: 'smooth' })
      this.isClicked = false
    },
  },
}
</script>

<style scoped lang="css">
.spin-enter-active {
  animation: spin 0.1s;
}

.spin-enter {
  animation: spin-faster 0.5s;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-faster {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.is-open {
  animation: spin-faster 0.5s;
}

.is-closed {
  animation: spin-2 1s;
}

@keyframes spin-2 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}

li {
  display: inline-block;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  color: #d6d6d6;
  position: relative;
}

li:hover {
  cursor: pointer;
  color: #ffb81c;
}

li::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffb81c;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a {
  text-decoration: none;
}
</style>
