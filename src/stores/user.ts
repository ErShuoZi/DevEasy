import { defineStore } from "pinia"
import router from "@/router/index"
import { handleUserLoginNetworkRequest } from "@/api/module/login"
import type { IUserInputInfo } from "@/views/Login/cpns/types/index"

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
        console.log(res)
        router.push("/layout")
      }
    }
  }
})

export default UserStore
