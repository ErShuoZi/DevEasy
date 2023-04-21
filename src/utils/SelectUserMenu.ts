import dynamicList from "@/router/dynamicList"
import type { RouteRecordRaw } from "vue-router"

const RealAddRoutes: RouteRecordRaw[] = []
export let firstMenu: any = null
export default function SelectUserMenu(userMenus: any[]) {
  const recursionGetMenus = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (!menu.children) {
        // if menu hasn't any children  -> firstLevel menu
        const route = dynamicList.find((item) => item.path === menu.path)
        if (route) {
          RealAddRoutes.push(route)
        }
        if (!firstMenu && route) firstMenu = menu
      } else {
        // menu has children -> has Secondary Menu
        recursionGetMenus(menu.children)
      }
    }
  }

  recursionGetMenus(userMenus)

  console.log(RealAddRoutes)
  return RealAddRoutes
}

/**
 *
 * @param userMenus  接口返回的所有路由
 */
