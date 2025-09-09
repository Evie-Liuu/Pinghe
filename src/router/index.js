import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Actions from "@/views/Actions.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/actions", name: "Actions", component: Actions },
  // { path: "/sdgs", name: "SDGs", component: () => import("@/views/SDGs.vue") },
//   { path: "/story", name: "Story", component: () => import("@/views/Story.vue") },
//   {
//     path: "/story/:id",
//     name: "story-detail",
//     component: () => import("@/views/StoryDetail.vue"),
//     props: true,
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;