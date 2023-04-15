import { createRouter, createWebHistory } from "vue-router"
import nprogress from "@/global/nprogress/nprogress"
import whiteList from "@/router/whiteList/index"
import { localCache } from "@/utils/DevEasyCache"
import { LOGIN_TOKEN } from "@/global/constants"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...whiteList]
})

router.beforeEach((to, from) => {
  nprogress.start()
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith("/layout") && !token) {
    return "/login"
  }
  if (to.path === "/layout") {
    return "/layout"
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
