import devEasyRequest from "@/api"
import type {
  IUserInputInfo,
  IUserFetchMenu
} from "@/views/Login/cpns/types/index"
export function handleUserLoginNetworkRequest(data: IUserInputInfo): any {
  return devEasyRequest.post({
    url: "/api/login",
    data
  })
}

// 请求用户菜单
export function fetchUserMenusNetworkRequest(data: IUserFetchMenu): any {
  return devEasyRequest.post({
    url: "/api/userMenus",
    data
  })
}
