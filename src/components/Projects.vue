<template>
  <v-row class="projects d-flex justify-content-center pt-16 mx-auto">
    <ProjectsHeader />
    <AllProjects />
  </v-row>
</template>

<script>
import AllProjects from '@/components/AllProjects.vue'
import ProjectsHeader from '@/components/ProjectsHeader.vue'

export default {
  name: 'Projects',
  components: {
    AllProjects,
    ProjectsHeader,
  },
}
</script>

<style scoped lang="css">
.projects {
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  max-width: 1000px;
}
</style>
