import type { App } from "vue"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"
import useUserStore from "@/stores/user"

export default {
  install: (app: App) => {
    app.component("SvgIcon", SvgIcon), getCacheWhenUserRefresh()
  }
}

export function getCacheWhenUserRefresh() {
  const userStore = useUserStore()
  userStore.GetLocalCache()
}
