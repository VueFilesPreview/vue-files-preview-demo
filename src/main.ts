import App from './App.vue'
import { createApp, App as Application } from 'vue'
import './style/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { VueFilesPreview } from "vue-files-preview";

const app: Application = createApp(App);

app.use(ElementPlus)
app.use(VueFilesPreview as any)
app.mount('#app');
