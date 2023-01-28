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
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/observations",
      name: "Observations",
      component: ObservationsView,
      children: [
        {
          path: "",
          name: "overview",
          component: COverview,
        },
        {
          path: "new",
          name: "new",
          component: CForm,
        },
        {
          path: ":id",
          name: "details",
          component: CDetails,
        },
      ],
    },
  ],
});

export default router;
