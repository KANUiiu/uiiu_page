import { createApp } from 'vue'
import { createPinia } from 'pinia' // must import createPinia
import App from './App.vue'
import './index.css'
import router from './router'
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

// createApp(App).mount('#app') <-- when only using mount method
