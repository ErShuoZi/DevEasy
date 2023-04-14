import DevEasyRequest from "./request/index"
import { BASE_URL, TIME_OUT } from "./config/index"

const devEasyRequest = new DevEasyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 当前实例的全局请求拦截器
  interceptors: {
    requetSuccessFn(config) {
      // config.headers.Authorization = `Bearer` + token
      return config
    }
  }
})

export default devEasyRequest
