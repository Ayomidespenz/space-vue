import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from "../src/components/Navbar.vue"
import './assets/style.css'

const app = createApp(App)
app.use(Navbar)
app.use(router)
app.mount('#app')