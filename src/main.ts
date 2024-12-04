import { createApp } from "vue";
import App from "@/router/App/App.vue"
import "@assets/styles/style.scss";
import "normalize.css";
import {router} from '@/router/router'

createApp(App).use(router).mount("#app");
