import { createApp } from "vue"
import { createPinia } from "pinia"
import "virtual:svg-icons-register"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

import registerPlugin from "./global/globalCpnRegister/index"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerPlugin)

app.mount("#app")
