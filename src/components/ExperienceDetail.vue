<template>
  <v-col class="pt-0 experience-detail" :cols="detailWidth">
    <ExperienceTitle
      :jobTitle="job.title"
      :companyName="job.companyName"
      :companySite="job.companySite"
    />
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
      if (!this.jobs[this.experience]) {
        return
      }
      return this.jobs[this.experience]
    },
    detailWidth() {
      return window.innerWidth < 600 ? '12' : '8'
    },
  },
}
</script>

<style scoped lang="css">
ul {
  list-style: none;
}

.v-icon {
  color: #ffb81c;
}

/* when the screen width is 600px or less, give a margin-bottom of 24px */
@media screen and (max-width: 600px) {
  .experience-detail {
    margin-bottom: 24px !important;
  }
}
</style>
