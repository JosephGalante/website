<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'TextLink',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick(event) {
      event.preventDefault()
      this.$emit('click', event)
    },
  },
}
</script>

<style scoped lang="css">
a {
  color: #ffb81c;
  display: inline-block;
  position: relative;
  text-decoration: none;
}

a:hover {
  color: #ffffff;
  cursor: pointer;
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
