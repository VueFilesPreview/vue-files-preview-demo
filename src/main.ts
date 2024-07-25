import App from './App.vue'
import { createApp, App as Application } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app: Application = createApp(App);

app.use(ElementPlus)

app.mount('#app');
