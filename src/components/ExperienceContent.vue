<template>
  <v-col class="d-flex content">
    <v-col class="pa-0" cols="4">
      <v-tabs direction="vertical" :color="'#ffb81c'" v-model="tab">
        <v-tab
          v-for="(company, index) in allCompaniesWorkedAt"
          :key="index"
          :value="companyValue(company)"
        >
          {{ company }}
        </v-tab>
      </v-tabs>
    </v-col>
    <ExperienceDetail :experience="tab" />
  </v-col>
</template>

<script>
import { jobs } from '../assets/experiences.js'
import ExperienceDetail from '@/components/ExperienceDetail.vue'

export default {
  name: 'ExperienceContent',
  components: {
    ExperienceDetail,
  },
  data() {
    return {
      tab: 'ecr',
    }
  },
  computed: {
    allCompaniesWorkedAt() {
      return Object.values(jobs).map((job) => job.companyName)
    },
  },
  methods: {
    companyValue(company) {
      return Object.keys(jobs).find((key) => jobs[key].companyName === company)
    },
  },
}
</script>

<style scoped lang="css">
.content {
  min-height: 330px;
}
</style>
