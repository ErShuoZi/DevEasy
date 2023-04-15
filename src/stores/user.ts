import { defineStore } from "pinia"
import router from "@/router/index"
import {
  handleUserLoginNetworkRequest,
  fetchUserMenusNetworkRequest
} from "@/api/module/login"
import type { IUserInputInfo } from "@/views/Login/cpns/types/index"
import { localCache } from "@/utils/DevEasyCache"
import SelectUserMenu from "@/utils/SelectUserMenu"
import { LOGIN_TOKEN, LOGIN_USERNAME } from "@/global/constants"

const UserStore = defineStore("User", {
  state: () => ({
    token: "",
    userInfo: {}
  }),
  getters: {},
  actions: {
    async UserLoginAction(userInputInfo: IUserInputInfo) {
      const res = await handleUserLoginNetworkRequest(userInputInfo)
      if (res.code === 200) {
        localCache.setCache(LOGIN_TOKEN, res.data.token)
        localCache.setCache(LOGIN_USERNAME, res.data.username)
        const userMenus = await fetchUserMenusNetworkRequest({
          token: res.data.token,
          username: res.data.username
        })
        // 判断当前用户拥有的权限,动态的添加到路由中
        const routes = SelectUserMenu(userMenus.data)
        console.log(routes)
        // router.push("/layout")
        for (const route of routes) {
          router.addRoute("layout", route)
        }
        router.push("/layout")
      } else {
        throw new Error("登录失败")
      }
    }
  }
})

export default UserStore
