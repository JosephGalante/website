<template>
  <div>
    <v-app-bar
      color="primary"
      prominent
      id="navbar"
      :style="{ top: navbarTop }"
    >
      <!-- <transition name="spin"> -->
      <template v-slot:prepend>
        <PageLogo class="ml-3 mt-3" />
      </template>
      <template v-slot:append>
        <v-app-bar-nav-icon
          ref="hamburgerIcon"
          variant="text"
          @mousedown="toggleClick"
          :class="{ 'is-open': isClicked, 'is-closed': !isClicked }"
        ></v-app-bar-nav-icon>
      </template>
      <!-- </transition> -->
    </v-app-bar>
    <v-navigation-drawer
      app
      flat
      v-model="isClicked"
      location="right"
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
import PageLogo from '@/components/PageLogo.vue'

export default {
  name: 'TheNavbarMobile',
  components: {
    Button,
    PageLogo,
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
      navbarTop: '0',
      lastScrollTop: 0,
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
        handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > this.lastScrollTop) {
        this.navbarTop = '-80px'
      } else {
        this.navbarTop = '0'
      }
      this.lastScrollTop = scrollTop
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped lang="css">
.spin-enter-active {
  animation: spin 0.7s;
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
  animation: spin-faster 0.3s;
}

.is-closed {
  animation: spin-2 0.7s;
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
