import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from '@/router'
import i18n from '@/i18n'

const pinia = createPinia()
const app = createApp(App)
const router = setupRouter()

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
