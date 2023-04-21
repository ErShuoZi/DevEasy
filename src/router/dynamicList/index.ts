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
    path: "/layout/components",
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

  // {
  //   path: "/layout/menus",
  //   component: () => import("@/views/Menu/index.vue"),
  //   name: "一级菜单"
  // },

  {
    path: "/layout/menus/index",
    component: () => import("@/views/Menu/index.vue"),
    name: "一级菜单"
  },
  {
    path: "/layout/menus/second",
    component: () => import("@/views/Menu/secondMenu/index.vue"),
    name: "二级菜单"
  },
  {
    path: "/layout/menus/third",
    component: () => import("@/views/Menu/thirdMenu/index.vue"),
    name: "三级菜单"
  },

  {
    path: "/layout/system",
    component: () => import("@/views/System/index.vue")
  }
]

export default dynamicList
