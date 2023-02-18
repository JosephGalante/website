<template>
  <v-col class="d-flex flex-wrap px-1 all-projects">
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

<style scoped lang="css">
/* When the screen width is equal to or less than 600px, make the flex-direction column and eliminate the flex-wrap */
@media screen and (max-width: 600px) {
  .all-projects {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
  }
}
</style>
