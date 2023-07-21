<template>
  <v-col :cols="cardSize" class="pa-2" :class="`project-card-${project.id}`">
    <v-card variant="tonal" @click="handleClickOutside($event, project.githubLink)">
      <ProjectCardHeader
        :githubLink="project.githubLink"
        :liveLink="project.liveLink"
      />

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
import ProjectCardHeader from '@/components/ProjectCardHeader.vue'
import ProjectCardFooter from '@/components/ProjectCardFooter.vue'

export default {
  name: 'ProjectCard',
  components: {
    ProjectCardHeader,
    ProjectCardFooter,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClickOutside(event, link) {
      console.log('event', event);
      console.log('link', link);
      if (!event.target.closest('.click-link')) {
        window.open(link, '_blank')
      }
    },
  },
  computed: {
    cardSize() {
      // do stuff with flex layout and flex wrap so that when the screen is small, the cards will wrap
      return window.innerWidth <= 600 ? 12 : 4
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

/* I want this div to take up the bottom 40px of the v-card that it is inside of */
.skills {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #1e1e1e;
}

/* when I hover over a v-card, make the bottom 40px of the v-card that it is inside of, have a background color of #1e1e1e */
.v-card:hover .skills {
  background-color: #1e1e1e;
}

@media screen and (max-width: 600px) {
  .v-col {
    width: 100%;
    /* flex shrink the height */
    flex-shrink: 1;
  }

  .v-card {
    height: 300px;
  }
}
</style>
