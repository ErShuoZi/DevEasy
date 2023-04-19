import { createI18n } from "vue-i18n"
import en from "./languageConfig/en"
import zh from "./languageConfig/zh"
const i18n = createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages: {
    en,
    zh
  }
})

export default i18n
