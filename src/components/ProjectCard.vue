<template>
  <v-col cols="4" class="pa-2">
    <v-card variant="tonal">
      <v-card-title class="headline d-flex justify-space-between mt-2 mb-0">
        <div class="d-flex justify-content-center align-center">
          <v-icon
            icon="fa-regular fa-folder"
            size="large"
            class="mr-2"
            color="#ffb81c"
          />
        </div>
        <div>
          <a
            href="https://github.com/JosephGalante/FindACoach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon
              class="icon-link ml-3"
              icon="fa-brands fa-github"
              size="small"
            />
          </a>
          <a
            href="https://findacoach-ebc23.web.app/coaches"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon
              class="icon-link ml-3"
              icon="fas fa-arrow-up-right-from-square"
              size="x-small"
            />
          </a>
        </div>
      </v-card-title>

      <v-card-title class="card-title-text">
        {{ project.title }}
      </v-card-title>

      <v-card-text>
        {{ project.description }}
      </v-card-text>

      <div class="d-flex skills">
        <ProjectCardFooter
          v-for="(color, skill) in project.skills"
          :key="skill"
          :language="skill"
          :color="color"
          :repoName="project.repoName"
        />
      </div>
    </v-card>
  </v-col>
</template>

<script>
import ProjectCardFooter from '@/components/ProjectCardFooter.vue'

export default {
  name: 'ProjectCard',
  components: {
    ProjectCardFooter,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="css">
.v-col {
  height: 300px;
  width: 300px;
}

.v-card {
  height: 100%;
  width: 100%;
}

.v-btn {
  color: white;
}

/*  when I hover over a v-card, make my cursor a pointer */
/* Also, when I first hover my mouse over a v-card, slightly move the card upwards, and when I leave my 
mouse from the v-card, return the v-card back down to its original position */
.v-card {
  transition: transform 0.2s ease-in-out;
  transform: translateY(0px);
}

.v-card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}

/* when I hover over a v-card, make only the text, and nothing else, in v-card-title text orange */
.v-card:hover .card-title-text {
  color: orange;
}

/* when I hover over only the github icon, make the github icon the only thing thats colored orange on this component */
.icon-link:hover {
  color: orange;
}

a {
  text-decoration: none;
  color: white;
}

/* I want this div to take up the bottom 40px of the v-card that it is inside of */
.skills {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #1e1e1e;
}
</style>
