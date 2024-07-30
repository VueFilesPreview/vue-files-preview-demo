import App from './App.vue'
import { createApp, App as Application } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
<<<<<<< HEAD
import { install as VueFilesPreview } from "vue-files-preview";

=======
import VueFilesPreview from "vue-files-preview";
>>>>>>> 4418a7c (chore: try once)
const app: Application = createApp(App);

app.use(ElementPlus)
app.use(VueFilesPreview)

app.mount('#app');
