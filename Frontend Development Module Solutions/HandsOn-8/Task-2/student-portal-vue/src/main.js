import { createApp } from 'vue'
import App from './App.vue'
// Step 113: Import and register router with app.use(router)
import router from './router'

const app = createApp(App)
app.use(router)   // Step 113: register router
app.mount('#app')
