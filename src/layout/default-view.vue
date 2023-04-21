<template>
  <v-app>
    <v-layout>
      <!-- hide-on-leave -->
      <v-scroll-y-transition :hide-on-leave="true" :leave-absolute="true">
        <v-navigation-drawer :permanent="true" class="layout-vertical-nav">
          <userMenu :user-menus="userMenus" />
        </v-navigation-drawer>
      </v-scroll-y-transition>

      <v-app-bar title="Application bar">
        <template v-slot:append>
          <TranslateIcon />
          <v-btn
            :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            @click="toggleTheme"
          ></v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-avatar
                v-bind="props"
                size="40"
                rounded="50%"
                :image="getAssetUrl('avatar-1.png')"
              ></v-avatar>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in state.avatarList"
                :key="index"
                @click="changeAvatar"
              >
                <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
import TranslateIcon from "./cpns/translateIcon.vue"
import useUserStore from "@/stores/user"
import { storeToRefs } from "pinia"
import userMenu from "./cpns/user-menus.vue"
import { useTheme } from "vuetify/lib/framework.mjs"
import { computed } from "vue"
import { localCache } from "@/utils/DevEasyCache"
import { getAssetUrl } from "@/utils/getAssets"
import { reactive } from "vue"
import router from "@/router"

const userStore = useUserStore()
const { userMenus } = storeToRefs(userStore)

const state = reactive({
  avatarList: [{ title: "message.logout" }]
})

const theme = useTheme()

const isDark = computed(() => theme.current.value.dark)
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
  localCache.setCache("theme", theme.global.name.value)
}
/** logout */
const changeAvatar = () => {
  localCache.clearCache()
  router.push("/login")
}
</script>

<style lang="scss" scoped>
.layout-vertical-nav {
  color: red;
}
</style>
