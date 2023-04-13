import type { App } from "vue"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"

export default {
  install: (app: App) => {
    console.log(app)
    app.component("SvgIcon", SvgIcon)
  }
}
