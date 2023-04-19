<template>
  <v-app class="main">
    <v-theme-provider>
      <router-view />
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
import { localCache } from "@/utils/DevEasyCache"
import { useTheme } from "vuetify/lib/framework.mjs"
import i18n from "./plugins/vuei18n"

const theme = useTheme()
const localTheme = localCache.getCache("theme")
const localLanguage = localCache.getCache("language")
if (localTheme) {
  theme.global.name.value = localTheme
}
if (localLanguage) {
  i18n.global.locale = localLanguage
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  color: var(--high-emphasis-opacity);
}
</style>
