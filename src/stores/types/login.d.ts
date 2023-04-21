import type { RouteRecordRaw } from "vue-router"
export type IUserMenus = {
  path: string
  name: string
  component: string
  meta: {
    title: string
  }
  children: any[]
  icon: string
}
export type IUserInfo = {
  username?: string
  usertitle?: string
  useremail?: string
}

export interface IUserState {
  token: string
  userInfo: IUserInfo
  userMenus: IUserMenus[]
}
