import type { RouteRecordRaw } from "vue-router"
const whiteList: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/layout"
  },
  {
    path: "/login",
    component: () => import("@/views/Login/login.vue")
  },
  {
    path: "/layout",
    redirect: "/layout/index",
    children: [
      {
        path: "/layout/index",
        component: () => import("@/layout/index.vue")
      }
    ]
  },
  {
    path: "/notFound",
    component: () => import("@/views/404/not-found.vue")
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/notFound"
  }
]

export default whiteList
