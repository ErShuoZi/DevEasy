// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import "../style/variables.scss"

import { LightTheme, DarkTheme } from "./theme"

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    // global: {
    //   ripple: false
    // }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },

  theme: {
    themes: {
      light: LightTheme,
      dark: DarkTheme
    }
  }
})

export default vuetify
