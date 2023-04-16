import { createApp } from "vue"
import { createPinia } from "pinia"
import "virtual:svg-icons-register"

import App from "./App.vue"
import router from "./router"

import "normalize.css"
import "./assets/index.scss"

import registerPlugin from "./global/globalCpnRegister/index"
import "./api/mock/index"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import "./style/variables.scss"

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light"
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerPlugin)
app.use(vuetify)

app.mount("#app")
