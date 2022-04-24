import { createApp } from 'vue'
import App from '@/App.vue'
import {createPinia} from 'pinia'
import router from '@/router/index'

let app = createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
