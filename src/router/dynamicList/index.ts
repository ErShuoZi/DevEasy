import type { RouteRecordRaw } from "vue-router"
const dynamicList: RouteRecordRaw[] = [
  {
    path: "/layout/form",
    component: () => import("@/components/form/form.vue")
  }
]

export default dynamicList
