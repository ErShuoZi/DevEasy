import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from "axios"
export interface IDevEasyRequestConfig extends AxiosRequestConfig {
  interceptors?: IDevEasyInterceptors
}

interface IDevEasyInterceptors {
  requetSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (response: AxiosResponse) => AxiosResponse
  responseFailureFn?: (err: any) => any
}
