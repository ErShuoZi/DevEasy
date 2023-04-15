import type { App } from "vue"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"

export default {
  install: (app: App) => {
    app.component("SvgIcon", SvgIcon)
  }
}
