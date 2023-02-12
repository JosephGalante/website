<template>
  <v-col cols="4">
    <v-card variant="tonal">
      <v-card-title class="headline d-flex justify-space-between mt-2 mb-0">
        <div class="d-flex justify-content-center align-center">
          <v-icon
            icon="fa-regular fa-folder"
            size="large"
            class="mr-2"
          ></v-icon>
        </div>
        <div>
          <v-icon class="ml-3" icon="fa-brands fa-github" size="small"></v-icon>
          <v-icon
            class="ml-3"
            icon="fas fa-arrow-up-right-from-square"
            size="x-small"
          ></v-icon>
        </div>
      </v-card-title>

      <v-card-title>
        {{ project.title }}
      </v-card-title>

      <v-card-text>
        {{ project.description }}
      </v-card-text>

      <div class="d-flex">
        <v-card-text>Vue</v-card-text>
        <v-card-text>Go</v-card-text>
        <v-card-text>JavaScript</v-card-text>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="css">
.v-btn {
  color: white !important;
}

/*  when I hover over a v-card, make my cursor a pointer */
/* Also, when I first hover my mouse over a v-card, slightly move the card upwards, and when I leave my 
mouse from the v-card, return the v-card back down to its original position */
.v-card {
  transition: transform 0.2s ease-in-out;
  transform: translateY(0px);
}

.v-card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}

/* when I hover over a v-card, make only the text, and nothing else, in v-card-title text orange */
.v-card:hover .v-card-title {
  color: orange !important;
}

/* when I hover over only the github icon, make the github icon the only thing thats colored orange on this component */
</style>
