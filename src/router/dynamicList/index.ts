import type { RouteRecordRaw } from "vue-router"
const dynamicList: RouteRecordRaw[] = [
  {
    path: "/layout/index",
    name: "index",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/layout/form",
    component: () => import("@/components/form/form.vue")
  },
  {
    path: "/layout/table",
    component: () => import("@/views/Table/index.vue")
  },
  {
    path: "/layout/auth",
    component: () => import("@/views/Auth/index.vue")
  },
  {
    path: "/layout/component",
    component: () => import("@/views/Component/index.vue")
  },
  {
    path: "/layout/echarts",
    component: () => import("@/views/Echarts/index.vue")
  },
  {
    path: "/layout/directives",
    component: () => import("@/views/Directives/index.vue")
  },
  {
    path: "/layout/menu",
    component: () => import("@/views/Menu/index.vue")
  },
  {
    path: "/layout/system",
    component: () => import("@/views/System/index.vue")
  }
]

export default dynamicList
