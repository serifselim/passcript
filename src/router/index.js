import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "../stores/user"
import {
  ListView,
  HomeView,
  GenerateView,
  HideView,
  LoginView,
  RegisterView,
} from "../views"

const routes = [
  { path: "/", component: HomeView, meta: { requiresAuth: false } },
  { path: "/login", component: LoginView, meta: { requiresAuth: false } },
  { path: "/register", component: RegisterView, meta: { requiresAuth: false } },
  {
    path: "/generate",
    component: GenerateView,
    meta: { requiresAuth: true },
  },
  {
    path: "/list",
    component: ListView,
    meta: { requiresAuth: true },
  },
  {
    path: "/hide",
    component: HideView,
    meta: { requiresAuth: true },
  },
  {
    path: "/list",
    component: ListView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const { currentUser } = useUserStore()
  if (requiresAuth && !currentUser) {
    next({ path: "/login" })
  } else if (!requiresAuth && currentUser) {
    next({ path: "/list" })
  } else {
    next()
  }
})

export default router
