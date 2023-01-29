import { createRouter, createWebHistory } from "vue-router";
// views
import LandingView from "../views/LandingView.vue";
import ObservationsView from "../views/ObservationsView.vue";
import AboutView from "../views/AboutView.vue";
// components
import AddObservation from "@/components/observations/AddObservation.vue";
import ObservationDetails from "@/components/observations/ObservationDetails.vue";
import ObservationsOverview from "@/components/observations/ObservationsOverview.vue";

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
          component: ObservationsOverview,
        },
        {
          path: "new",
          name: "new",
          component: AddObservation,
        },
        {
          path: ":id",
          name: "details",
          component: ObservationDetails,
        },
      ],
    },
  ],
});

export default router;
