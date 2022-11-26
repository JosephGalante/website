<template>
  <header>
    <nav>
      <div>Hello Icon</div>
      <div id="hi">
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped lang="scss">
* {
  font-family: "Courier New", Courier, monospace;
}

header {
  position: fixed;
  top: 0;
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
  margin: 0px 20px;
}

#hi {
  display: flex;
}
</style>
