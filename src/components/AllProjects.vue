<template>
  <v-row class="d-flex flex-row">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </v-row>
</template>

<script>
import { projects } from '../assets/projects.js'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'AllProjects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
    }
  },
}
</script>

<style></style>
