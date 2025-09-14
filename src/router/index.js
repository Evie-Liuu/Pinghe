import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { useAuth } from "@/stores/auth";

const routes = [
  { path: "/", name: "Home", component: Home },
  // { path: "/login", name: "Login", component: () => import("@/views/Login.vue") },
  { path: "/about", name: "About", component: () => import("@/views/About.vue") },
  { path: "/actions", name: "Actions", component: () => import("@/views/Actions.vue") },
  { path: "/sdgs", name: "SDGs", component: () => import("@/views/SDGs.vue") },
  { path: "/story", name: "Story", component: () => import("@/views/Story.vue") },
  {
    path: "/story/new",
    name: "story-new",
    component: () => import("@/views/StoryNew.vue"),
    meta: { requiresTeacher: true }
  },
  {
    path: "/story/:id",
    name: "story-detail",
    component: () => import("@/views/StoryDetail.vue"),
    props: true,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守衛
router.beforeEach((to, from, next) => {
  const { isAuthenticated, isTeacher, checkAuth } = useAuth();

  // 檢查現有認證狀態
  checkAuth();

  // 需要老師權限的路由
  if (to.meta.requiresTeacher && !isTeacher.value) {
    // 如果完全沒有登入，回到首頁讓用戶選擇身分
    if (!isAuthenticated.value) {
      next({ name: 'Home' });
    } else {
      // 已登入但非老師身分，顯示權限不足提示
      alert('此功能僅限老師使用');
      next(false);
    }
    return;
  }

  // 需要任何身分登入的路由
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'Home' });
    return;
  }

  // 舊的登入頁面重定向到首頁
  if (to.name === 'Login') {
    next({ name: 'Home' });
    return;
  }

  next();
});

export default router;