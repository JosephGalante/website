/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Components
import App from './App.vue'
import TextLink from '@/components/TextLink.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Extra
import router from './router'

const app = createApp(App)
app.use(router)
app.component('text-link', TextLink)

registerPlugins(app)

app.mount('#app')
