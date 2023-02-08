<template>
  <v-col class="d-flex">
    <v-col class="pa-0" cols="4">
      <v-tabs direction="vertical" :color="'#ffb81c'" v-model="tab">
        <v-tab value="ecr">Edge Case Research</v-tab>
        <v-tab value="mma">Marsh & McLennan Agency</v-tab>
        <v-tab value="pip">Partner in Publishing</v-tab>
      </v-tabs>
    </v-col>
    <v-col v-if="tab === 'ecr'" class="pt-0" cols="8">
      <h3>
        Software Engineer
        <span>@ Edge Case Research</span>
      </h3>
      <h4 class="mb-3">May 2022 - Present</h4>
      <ul>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Collaborated on a cross-functional team of engineers to design and
          implement new features for a web application aimed at ensuring
          autonomous vehicle safety, utilizing Golang on the backend and Vue.js
          on the front-end.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Developed new user-interface features by collaborating with the
          product team, resulting in increased user satisfaction and a smooth
          user experience for end-users.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Leveraged Docker and Kubernetes to optimize and streamline application
          deployments and clusters, leading to reductions in downtime and
          improved system scalability by collaborating with the platform
          engineering team.
        </li>
      </ul>
    </v-col>
    <v-col v-if="tab === 'mma'" class="pt-0" cols="8">
      <h3>
        Operations Intern
        <span>@ Marsh & McLennan Agency</span>
      </h3>
      <h4 class="mb-3">May 2021 - July 2021</h4>
      <ul>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Manipulated data in SQL to develop benchmarking dashboards for use in
          client sales meetings.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Developed Industry Benchmarking Power BI dashboards for use in sales
          pitches to potential clients. Presented dashboards to upper
          management.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Aggregated data in Salesforce CRM database for 8 major clients, to
          streamline marketing strategies for salespeople.
        </li>
      </ul>
    </v-col>
    <v-col v-if="tab === 'pip'" class="pt-0" cols="8">
      <h3>
        Online Trainer
        <span>@ Partner in Publishing</span>
      </h3>
      <h4 class="mb-3">May 2020 - August 2020</h4>
      <ul>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Individually trained more than 250 undergraduate professors to use
          learning management systems such as Canvas.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Ranked among top 3 of 25 trainers in customer satisfaction surveys for
          three consecutive months.
        </li>
        <li>
          <v-icon icon="fas fa-angle-right"></v-icon>
          Wrote Microsoft Excel Macro applications to improve team productivity
          in automated reporting.
        </li>
      </ul>
    </v-col>
  </v-col>
</template>

<script>
export default {
  name: 'ExperienceContent',
  data() {
    return {
      tab: 'ecr',
    }
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
