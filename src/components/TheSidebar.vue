<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li>
        <a
          href="https://www.github.com/JosephGalante"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon icon="fab fa-github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jegalante"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon icon="fa-brands fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="mailto:jegalante@gmail.com?Subject=Hey%20Joe!" target="_blank">
          <v-icon icon="fa-regular fa-envelope" />
        </a>
      </li>
      <li>
        <a
          href="https://www.codepen.io/joegalante"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon icon="fab fa-codepen" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'TheSidebar',
  mounted() {
    // have the unordered list all appear at once, wait for after the nav-items have appeared
    // then animate the unordered list to appear from the bottom
    const sidebarList = document.querySelector('.sidebar-list')
    gsap.from(sidebarList, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power4.out', // wait for the nav-items to appear
      delay: 0.5,
    })
  },
}
</script>

<style scoped lang="css">
.sidebar {
  display: block;
  position: fixed;
  bottom: 0px;
  left: 40px;
}

ul {
  list-style: none;
}

ul::after {
  content: '';
  display: block;
  width: 2px;
  height: 120px;
  margin: 0px auto;
  background-color: #ffb81c;
}

li {
  margin-bottom: 25px;
  transition: transform 250ms;
}

li:hover {
  transform: translateY(-4px);
}

a {
  text-decoration: none;
  color: #ffb81c;
}

.v-icon {
  font-size: 30px;
}

.v-icon:hover {
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
