<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer :permanent="true">
        <userMenu :user-menus="userMenus" />
      </v-navigation-drawer>

      <v-app-bar title="Application bar">
        <template v-slot:append>
          <v-btn
            :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            @click="toggleTheme"
          ></v-btn>
        </template>
      </v-app-bar>

      <v-main style="min-height: 300px">
        <DefaultView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import DefaultView from "./view.vue"

import useUserStore from "@/stores/user"
import { storeToRefs } from "pinia"
import userMenu from "./cpns/user-menus.vue"
import { useTheme } from "vuetify/lib/framework.mjs"

const userStore = useUserStore()
const { userMenus } = storeToRefs(userStore)

const theme = useTheme()
const isDark = theme.current.value.dark

const toggleTheme = () => {
  console.log(
    (theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark")
  )
}
</script>

<style lang="scss" scoped></style>
