import { createApp } from "vue"

import App from "./App.vue"

import "normalize.css"
import "./assets/index.scss"

import "./api/mock/index"
import { registerPlugin } from "./plugins/index"

const app = createApp(App)

app.use(registerPlugin)

app.mount("#app")
