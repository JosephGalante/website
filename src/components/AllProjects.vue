<template>
  <v-col class="d-flex flex-wrap px-1">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </v-col>
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
