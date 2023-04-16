import dynamicList from "@/router/dynamicList"
import type { RouteRecordRaw } from "vue-router"

const RealAddRoutes: RouteRecordRaw[] = []
export let firstMenu: any = null
export default function SelectUserMenu(userMenus: any) {
  for (const menu of userMenus) {
    const route = dynamicList.find((item) => {
      return item.path === menu.path
    })
    if (route) {
      // if (!RealAddRoutes.find((item) => item.path === route.path)) {
      //   RealAddRoutes.push(route)
      // }
      RealAddRoutes.push(route)
    }
    if (!firstMenu && route) firstMenu = menu
  }

  return RealAddRoutes
}
