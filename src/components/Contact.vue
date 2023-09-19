<template>
  <v-row
    id="contact"
    class="contact pt-12 mt-12 mb-16 d-flex mx-auto mb-0 pb-5"
  >
    <v-col class="d-flex align-center">
      <v-divider
        role="presentation"
        :color="'#ffb81c'"
        :thickness="3"
      ></v-divider>
      <h1 class="mx-3 text-no-wrap">What now?</h1>
      <v-divider
        role="presentation"
        :color="'#ffb81c'"
        :thickness="3"
      ></v-divider>
    </v-col>
    <v-col class="d-flex text-center">
      <p>
        Hey there. Thanks for checking out my site. If you're interested in
        working together, or just want to say hi, feel free to reach out to me
        at the link below.
      </p>
    </v-col>
    <v-col class="d-flex justify-center mt-3">
      <a href="mailto:jegalante@gmail.com?Subject=Hey%20Joe!">
        <Button>Say Hi</Button>
      </a>
    </v-col>
  </v-row>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Contact',
  components: {
    Button,
  },
}
</script>

<style scoped lang="css">
.contact {
  flex-direction: column;
  max-width: 600px;
}

a {
  text-decoration: none;
}
</style>
