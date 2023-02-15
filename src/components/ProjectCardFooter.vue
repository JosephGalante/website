<template>
  <v-card-text class="px-4">
    <div class="d-flex align-center justify-space-between">
      <div>
        <v-icon
          class="mr-1"
          icon="fa-solid fa-circle"
          size="x-small"
          :color="color"
        ></v-icon>
        <span class="mr-3">{{ language }}</span>

        <v-icon class="mr-1" icon="fa-solid fa-star" size="x-small"></v-icon>
        <span class="mr-3">{{ numStars }}</span>
        <v-icon
          class="mr-1"
          icon="fa-solid fa-code-fork"
          size="x-small"
        ></v-icon>
        <span class="mr-3">{{ numForks }}</span>
      </div>
      <span v-if="repoSize > 0">{{ repoSize }} MB</span>
    </div>
  </v-card-text>
</template>

<script>
import { myGitHubAPILink } from '../assets/projects.js'

export default {
  name: 'ProjectCardFooter',
  data() {
    return {
      repoSize: null,
      numStars: null,
      numForks: null,
      myGitHubAPILink,
    }
  },
  props: {
    language: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    repoName: {
      type: String,
      required: true,
    },
  },
  methods: {
    async initializeRepoData() {
      try {
        const response = await fetch(`${myGitHubAPILink}/${this.repoName}`)
        const data = await response.json()
        // console.log(data)

        // properly format the size of the repo into Megabytes
        const size = Math.round((data.size / 1000) * 10) / 10
        this.repoSize = size

        // get the number of stars and forks
        this.numStars = data.stargazers_count
        this.numForks = data.forks_count
      } catch (error) {
        console.error(error)
        return null
      }
    },
  },
  async mounted() {
    // await this.initializeRepoData()
  },
}
</script>

<style></style>
