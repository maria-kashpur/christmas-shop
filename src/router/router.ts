import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Gifts from "./pages/Gifts.vue";

const routes = [
  { path: "/", component: Home},
  { path: "/gifts", component: Gifts },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});
