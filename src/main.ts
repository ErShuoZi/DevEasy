import { createApp } from "vue"
import { createPinia } from "pinia"
import "virtual:svg-icons-register"

import App from "./App.vue"
import router from "./router"

import "normalize.css"
import "./assets/index.scss"

import "./api/mock/index"
import registerPlugin from "./global/globalCpnRegister/index"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import "./style/variables.scss"
import { themeLightConfig, themeDarkConfig } from "./global/theme/index"
// import { md1 } from "vuetify/blueprints"

const vuetify = createVuetify({
  components,
  directives,
  // blueprint: md1,
  theme: {
    defaultTheme: "themeLightConfig",
    themes: {
      themeLightConfig,
      themeDarkConfig
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(registerPlugin)
app.use(router)

app.use(vuetify)

app.mount("#app")
