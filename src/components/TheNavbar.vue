<template>
  <header>
    <nav>
      <div>
        <router-link :to="'home'">Hello Icon</router-link>
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
        </ol>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>

<style scoped lang="scss">
* {
  font-family: 'Courier New', Courier, monospace;
}

header {
  padding: 0px 50px;
  width: 100%;
  background-color: #000000;
  color: #ffb81c;
  line-height: 1.3;
  font-size: 20px;
}

nav {
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  justify-content: space-between;
}

div {
  // margin 0px on top and bottom, 20px on left and right
  margin: 0px 20px;
}

.hi {
  display: flex;
}

a {
  text-decoration: none;
  color: #ffb81c;
}

a:hover {
  color: #ffffff;
}

ol {
  display: flex;
  list-style: none;
}
</style>
