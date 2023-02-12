<template>
  <h3>
    {{ jobTitle }}
    <span>
      @
      <text-link :url="companySite">{{ companyName }}</text-link>
    </span>
  </h3>
</template>

<script>
export default {
  name: 'ExperienceTitle',
  props: {
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companySite: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="css">
h3 span {
  color: #ffb81c;
}
</style>
