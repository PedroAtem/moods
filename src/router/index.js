import Vue from "vue";
import VueRouter from "vue-router";
import Mood from "../components/Mood.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mood",
    component: Mood
  },
  {
    path: "/sadMood",
    name: "sadMood",
    component: Mood
  },
  {
    path: "/improvingMood",
    name: "improvingMood",
    component: () => import("../components/ImprovingMood.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
