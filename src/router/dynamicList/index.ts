import type { RouteRecordRaw } from "vue-router"
const dynamicList: RouteRecordRaw[] = [
  {
    path: "/layout/index",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/layout/form",
    component: () => import("@/components/form/form.vue")
  }
]

export default dynamicList
