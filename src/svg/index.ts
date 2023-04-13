import { createApp } from "vue"

const App = createApp({})
import SvgIcon from "../components/SvgIcon/svg-icon.vue"

App.component("SvgIcon", SvgIcon)

const result = import.meta.glob("./icons/*.svg", {
  eager: true
})
const SvgArray: string[] = []
const regex = /^.*\//
for (const path in result) {
  const fileName = path.replace(regex, "")
  SvgArray.push(fileName)
}
