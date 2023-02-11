<template>
  <v-col class="pt-0" cols="8">
    <ExperienceTitle :jobTitle="job.title" :companyName="job.companyName" />
    <h4 class="mb-3">{{ job.duration }}</h4>
    <ul>
      <li v-for="(task, index) in job.tasks" :key="index">
        <v-icon icon="fas fa-angle-right"></v-icon>
        {{ task }}
      </li>
    </ul>
  </v-col>
</template>

<script>
import { jobs } from '../assets/experiences.js'
import ExperienceTitle from './ExperienceTitle.vue'

export default {
  name: 'ExperienceDetail',
  components: {
    ExperienceTitle,
  },
  data() {
    return {
      jobs,
    }
  },
  props: {
    experience: {
      type: String,
      required: true,
    },
  },
  computed: {
    job() {
      if(!this.jobs[this.experience]){
        return
      }
      return this.jobs[this.experience]
    },
  },
}
</script>

<style scoped lang="css">
h3 span {
  color: #ffb81c;
}

ul {
  list-style: none;
}

.v-icon {
  color: #ffb81c;
}
</style>
