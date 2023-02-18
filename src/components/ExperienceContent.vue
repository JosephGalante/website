<template>
  <v-col class="d-flex content">
    <v-col class="pa-0" cols="4">
      <v-tabs :direction="tabDirection" :color="'#ffb81c'" v-model="tab">
        <v-tab v-for="(job, key) in jobs" :key="key" :value="key">
          {{ job.companyName }}
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
      jobs,
      tab: 'ecr',
    }
  },
  computed: {
    tabDirection() {
      return window.innerWidth < 600 ? 'horizontal' : 'vertical'
    },
  },
}
</script>

<style scoped lang="css">
.content {
  min-height: 330px;
}

.v-tab:hover {
  background-color: rgb(15, 15, 15) !important;
}

/* when the screen size is less than 600px, make the .content have no min-height */
</style>
