<template>
  <v-col cols="4">
    <v-card variant="tonal">
      <v-card-title class="headline">{{ project.title }}</v-card-title>

      <v-card-text>
        {{ project.description }}
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text :href="project.link" target="_blank">
          View Project
        </v-btn>
      </v-card-actions>
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
.v-col:hover {
  cursor: pointer;
}
</style>
