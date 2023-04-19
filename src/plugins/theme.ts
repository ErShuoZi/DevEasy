import type { ThemeDefinition } from "vuetify"
export const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f4f5fa",
    surface: "#FFFFFF",
    primary: "#8958f4",
    "primary-darken-1": "#3700B3",
    secondary: "#f0ebfd",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00"
  }
}

export const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#27243b",
    surface: "#302d49",
    primary: "#8958f4",
    "primary-darken-1": "#3700B3",
    secondary: "#3a335d",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00"
  }
}
