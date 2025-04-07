import '@/assets/styles/main.scss'
import '@/assets/generated/maladum.css'
import '@/assets/generated/beasts.css'
import '@/assets/generated/adventure.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import { createPinia } from 'pinia'
import { setupRouter } from '@/router'

const pinia = createPinia()
const app = createApp(App)
const router = setupRouter()

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
