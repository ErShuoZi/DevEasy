import dynamicList from "@/router/dynamicList"
import type { RouteRecordRaw } from "vue-router"

const RealAddRoutes: RouteRecordRaw[] = []
export default function SelectUserMenu(userMenus: any) {
  for (const menu of userMenus) {
    const route = dynamicList.find((item) => {
      return item.path === menu.path
    })
    if (route) {
      if (!RealAddRoutes.find((item) => item.path === route.path))
        RealAddRoutes.push(route)
    }
  }
  return RealAddRoutes
}
