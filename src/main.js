import { createApp } from 'vue'
import './assets/fonts.css'
import './index.css'
import App from './App.vue'
import router from './router'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { authReady } from "@/stores/auth";

// 等待 Firebase 首次驗證完成後再掛載應用程式
authReady.then(() => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
})