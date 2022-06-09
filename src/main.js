import { createApp } from "vue";
import App from "./App.vue";
import Router from './routes'
import "./index.css";

createApp(App).use(Router).mount("#app");