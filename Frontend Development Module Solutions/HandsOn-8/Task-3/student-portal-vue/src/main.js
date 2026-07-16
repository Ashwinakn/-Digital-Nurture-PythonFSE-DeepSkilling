import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Step 115: Register Pinia with app.use(createPinia())
app.use(createPinia())
app.use(router)

app.mount('#app')
