import type { ThemeDefinition } from "vuetify"

const themeLightConfig: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f4f5fa",
    surface: "#f4f5fa",
    primary: "#9c73f6",
    "primary-darken-1": "#f4f5fa",
    secondary: "#FFFFFF",
    "secondary-darken-1": "#ffc947",
    "bg-login-btn": "#9c73f6",
    error: "#d85140",
    info: "#d85140",
    success: "#d85140",
    warning: "#27243b"
  }
}

const themeDarkConfig: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#302d49",
    surface: "#27243b",
    primary: "#27243b",
    "primary-darken-1": "#27243b",
    secondary: "#302d49",
    "secondary-darken-1": "#ffc947",
    error: "#27243b",
    info: "#27243b",
    success: "#27243b",
    warning: "#27243b",
    "bg-login-btn": "#9c73f6"
  }
}

export { themeDarkConfig, themeLightConfig }
