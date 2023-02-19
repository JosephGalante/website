<template>
  <v-row class="d-flex experience-content justify-content-center mx-auto">
    <v-col class="pa-0 tabs-stuff" :cols="experienceSize">
      <v-tabs
        :direction="tabDirection"
        :color="'#ffb81c'"
        v-model="tab"
        class="ma-3"
      >
        <v-tab
          v-for="(job, key) in jobs"
          :key="key"
          :value="key"
          :size="tabSize"
        >
          {{ job.companyName }}
        </v-tab>
      </v-tabs>
    </v-col>
    <ExperienceDetail :experience="tab" class="mt-2" />
  </v-row>
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
      jobs,
      tab: 'ecr',
    }
  },
  computed: {
    tabDirection() {
      return window.innerWidth < 600 ? 'horizontal' : 'vertical'
    },
    tabSize() {
      return window.innerWidth < 600 ? 'x-small' : 'default'
    },
    experienceSize() {
      return window.innerWidth < 600 ? '12' : '4'
    },
  },
}
</script>
