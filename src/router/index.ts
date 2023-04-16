import { createRouter, createWebHashHistory } from "vue-router"
import nprogress from "@/global/nprogress/nprogress"
import { localCache } from "@/utils/DevEasyCache"
import { LOGIN_TOKEN } from "@/global/constants"
import { firstMenu } from "@/utils/SelectUserMenu"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/layout"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/login.vue")
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("@/layout/index.vue"),
      children: []
    }
    // {
    //   path: "/:pathMatch(.*)",
    //   component: () => import("@/views/404/not-found.vue")
    // }
  ]
})

router.beforeEach((to, from) => {
  nprogress.start()
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith("/layout") && !token) {
    return "/login"
  }
  if (to.path === "/layout") {
    if (firstMenu) {
      return firstMenu.path
    } else {
      return "/layout"
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
