<template>
  <v-col class="d-flex content pb-16 mb-16">
    <v-col class="pa-0 tabs-stuff" :cols="experienceSize">
      <v-tabs
        :direction="tabDirection"
        show-arrows
        :color="'#ffb81c'"
        v-model="tab"
      >
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
    experienceSize() {
      return window.innerWidth < 600 ? '12' : '4'
    },
  },
}
</script>

<style scoped lang="css">
.content {
  min-height: 330px;
}

/* when the screen width is 600px or less, stack the .content on top of the ExperienceDetail component */
@media screen and (max-width: 600px) {
  .content {
    flex-direction: column;
  }

  .content {
    min-height: 0;
  }

  .tabs-stuff {
    margin-bottom: 16px !important;
  }
}

.v-tab:hover {
  background-color: rgb(15, 15, 15) !important;
}

/* when the screen size is less than 600px, make the .content have no min-height */
</style>
