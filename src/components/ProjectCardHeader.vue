<template>
  <v-card-title class="headline d-flex justify-space-between mt-2 mb-0">
    <div class="d-flex justify-center align-center">
      <v-icon
        icon="fa-regular fa-folder"
        size="large"
        class="mr-2"
        color="#ffb81c"
      />
    </div>
    <div>
      <a
        href="https://github.com/JosephGalante/FindACoach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon
          class="icon-link ml-3"
          icon="fa-brands fa-github"
          size="small"
        />
      </a>
      <a
        href="https://findacoach-ebc23.web.app/coaches"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon
          class="icon-link ml-3"
          icon="fas fa-arrow-up-right-from-square"
          size="x-small"
        />
      </a>
    </div>
  </v-card-title>
</template>

<script>
export default {
  name: 'ProjectCardHeader',
  props: {
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="css">
.icon-link:hover {
  color: orange;
}

a {
  text-decoration: none;
  color: white;
}
</style>
