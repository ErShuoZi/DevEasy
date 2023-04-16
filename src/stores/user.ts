import { defineStore } from "pinia"
import router from "@/router/index"
import {
  handleUserLoginNetworkRequest,
  fetchUserMenusNetworkRequest
} from "@/api/module/login"
import type { IUserInputInfo } from "@/views/Login/cpns/types/index"
import { localCache } from "@/utils/DevEasyCache"
import SelectUserMenu from "@/utils/SelectUserMenu"
import type { IUserState } from "@/stores/types/index"
import {
  LOGIN_TOKEN,
  LOGIN_USERINFO,
  LOGIN_USERMENUS
} from "@/global/constants"

const useUserStore = defineStore("User", {
  state: (): IUserState => ({
    token: "",
    userInfo: {},
    userMenus: []
  }),
  getters: {},
  actions: {
    async UserLoginAction(userInputInfo: IUserInputInfo) {
      const res = await handleUserLoginNetworkRequest(userInputInfo)
      if (res.code === 200) {
        this.token = res.data.token
        this.userInfo = res.data.userInfo
        localCache.setCache(LOGIN_TOKEN, res.data.token)
        localCache.setCache(LOGIN_USERINFO, res.data.userInfo)
        const userMenus = await fetchUserMenusNetworkRequest({
          token: res.data.token,
          username: res.data.userInfo.username
        })
        localCache.setCache(LOGIN_USERMENUS, userMenus.data)
        this.userMenus = userMenus.data

        // 判断当前用户拥有的权限,动态的添加到路由中
        const routes = SelectUserMenu(userMenus.data)
        // router.push("/layout")
        for (const route of routes) {
          router.addRoute("layout", route)
        }
        router.push("/layout")
      } else {
        throw new Error("登录失败")
      }
    },

    // user refresh
    GetLocalCache() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(LOGIN_USERINFO)
      const userMenus = localCache.getCache(LOGIN_USERMENUS)
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        const routes = SelectUserMenu(userMenus)
        for (const route of routes) {
          router.addRoute("layout", route)
        }
      }
    }
  }
})

export default useUserStore
