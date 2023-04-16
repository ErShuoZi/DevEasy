import type { ThemeDefinition } from "vuetify"

const themeLightConfig: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f4f5fa",
    surface: "#f4f5fa",
    primary: "#f4f5fa",
    "primary-darken-1": "#f4f5fa",
    secondary: "#f4f5fa",
    "secondary-darken-1": "#f4f5fa",
    error: "#d85140",
    info: "#d85140",
    success: "#d85140",
    warning: ""
  }
}

const themeDarkConfig: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#302d49",
    surface: "#302d49",
    primary: "#d85140",
    "primary-darken-1": "#d85140",
    secondary: "#d85140",
    "secondary-darken-1": "#d85140",
    error: "#d85140",
    info: "#d85140",
    success: "#d85140",
    warning: ""
  }
}

export { themeDarkConfig, themeLightConfig }
