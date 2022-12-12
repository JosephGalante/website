<template>
  <header>
    <nav>
      <div>
        <router-link :to="'home'" id="logo">JG</router-link>
      </div>
      <div class="hi">
        <ol>
          <li>
            <router-link :to="'about'">About</router-link>
          </li>
          <li>
            <router-link :to="'projects'">Projects</router-link>
          </li>
          <li>
            <router-link :to="'experience'">Experience</router-link>
          </li>
          <li>
            <router-link :to="'contact'">Contact</router-link>
          </li>
          <a href="/RESUME-Galante(ECR1).pdf" target="_blank"
            ><Button style="margin-left: 20px">Resumé</Button></a
          >
        </ol>
      </div>
    </nav>
  </header>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'TheNavbar',
  components: {
    Button,
  },
}
</script>

<style scoped lang="scss">
header {
  padding: 0px 50px;
  width: 100%;
  background-color: #000000;
  color: #ffb81c;
  position: fixed;
}

nav {
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
}

div {
  // margin 0px on top and bottom, 20px on left and right
  margin: 0px 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.hi a {
  text-decoration: none;
  color: #d6d6d6;
}

a:hover {
  color: #ffb81c;
}

ol {
  list-style: none;
}

li {
  margin: 0px 20px;
  display: inline-block;
  position: relative;
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

#logo {
  font-size: 3em;
  font-weight: bold;
  color: #ffb81c;
}
</style>
