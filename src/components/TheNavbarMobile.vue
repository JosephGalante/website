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
        <v-list-item v-for="item in links" :key="item.link">
          <text-link :url="item.link">{{ item.text }}</text-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheNavbarMobile',
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
  },
}
</script>

<style scoped lang="css">
.spin-enter-active {
  animation: spin 1.5s;
}

.spin-enter {
  animation: spin-faster 1s;
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
    transform: rotate(720deg);
  }
}

.is-open {
  animation: spin-faster 1s;
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
</style>
