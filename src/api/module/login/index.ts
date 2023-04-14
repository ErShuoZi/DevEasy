import devEasyRequest from "@/api"
import type { IUserInputInfo } from "@/views/Login/cpns/types/index"
export function handleUserLoginNetworkRequest(data: IUserInputInfo) {
  return devEasyRequest.post({
    url: "/api/login",
    data
  })
}
