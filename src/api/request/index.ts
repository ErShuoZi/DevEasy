import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import type { IDevEasyRequestConfig } from "./types"

class DevEasyRequest {
  instance: AxiosInstance
  constructor(config: IDevEasyRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (err) => {
        return err
      }
    )

    // 针对特定的实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requetSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }
  request(config: IDevEasyRequestConfig) {
    if (config.interceptors?.requetSuccessFn) {
      config = config.interceptors.requetSuccessFn(
        config as any as InternalAxiosRequestConfig
      )
    }
    return new Promise((resolve, reject) => {
      return this.instance
        .request(config)
        .then((res) => {
          // 针对单一接口的拦截器
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          // 针对单一请求响应错误的
          if (config.interceptors?.responseFailureFn) {
            err = config.interceptors.responseFailureFn(err)
          }
          console.log(err)
          reject(err)
        })
    })
  }
  get(config: IDevEasyRequestConfig) {
    return this.request({ ...config, method: "GET" })
  }
  post(config: IDevEasyRequestConfig) {
    return this.request({ ...config, method: "POST" })
  }
  delete(config: IDevEasyRequestConfig) {
    return this.request({ ...config, method: "DELETE" })
  }
  patch(config: IDevEasyRequestConfig) {
    return this.request({ ...config, method: "PATCH" })
  }
}

export default DevEasyRequest
