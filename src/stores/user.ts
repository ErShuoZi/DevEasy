import { ref, computed } from "vue"
import { defineStore } from "pinia"
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
      console.log(res)
    }
  }
})

export default UserStore
