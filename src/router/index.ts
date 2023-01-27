import { createRouter, createWebHistory } from "vue-router";
// views
import LandingView from "../views/LandingView.vue";
import ObservationsView from "../views/ObservationsView.vue";
import AboutView from "../views/AboutView.vue";
// components
import CForm from "@/components/observations/Form.vue";
import CDetails from "@/components/observations/Details.vue";
import COverview from "@/components/observations/Overview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: LandingView,
    },
    {
      path: "/observations",
      name: "observations",
      component: ObservationsView,
      children: [
        {
          path: "/",
          component: COverview,
        },
        {
          path: "/new",
          component: CForm,
        },
        {
          path: "/observation/:id",
          component: CDetails,
        },
      ],
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
  ],
});

export default router;
