import { createRouter, createWebHistory } from "vue-router"
import nprogress from "@/global/nprogress/nprogress"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Login/login.vue")
    },
    {
      path: "/layout",
      component: () => import("@/layout/index.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
