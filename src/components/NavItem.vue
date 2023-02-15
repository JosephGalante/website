<template>
  <li @click="scrollTo(link)">
    {{ text }}
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollTo(itemId) {
      const elem = document.getElementById(`${itemId}`)
      elem.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
li {
  margin: 0px 20px;
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
</style>
