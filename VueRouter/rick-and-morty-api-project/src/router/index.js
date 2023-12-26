import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeViewVue,
    },
    {
      name: "characters",
      path: "/characters",
      component: () => import("../views/CharactersView.vue"),
    },
    {
      name: "detail",
      path: "/characters/:name",
      component: () => import("../views/CharacterDetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
