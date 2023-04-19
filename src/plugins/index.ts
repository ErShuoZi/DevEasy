import type { App } from "vue"
import { createPinia } from "pinia"
import router from "@/router/index"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"
import useUserStore from "@/stores/user"
import vuetify from "./vuetify"

import "virtual:svg-icons-register"
import i18n from "./vuei18n"

export function registerPlugin(app: App) {
  app.component("SvgIcon", SvgIcon), app.use(createPinia()).use(vuetify)
  getCacheWhenUserRefresh()
  app.use(router).use(i18n)
}

export function getCacheWhenUserRefresh() {
  const userStore = useUserStore()
  userStore.GetLocalCache()
}
