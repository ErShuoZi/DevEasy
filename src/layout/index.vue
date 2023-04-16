<template>
  <v-theme-provider theme="myCustomLightTheme">
    <v-app class="container">
      <v-navigation-drawer
        app
        class="navigation-menu"
        elevation="15"
        :expand-on-hover="true"
        :rail="true"
        :rounded="true"
      >
        <UserMenus :userInfo="userInfo" :userMenus="userMenus" />
      </v-navigation-drawer>

      <v-app-bar app class="top-bar-container">
        <div class="top-bar">
          <div class="top-bar-left"></div>
          <div class="top-bar-right">
            <TopTools></TopTools>
          </div>
        </div>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main class="page">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app class="footer">
        <!-- -->
      </v-footer>
    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
import UserMenus from "./cpns/user-menus.vue"
import TopTools from "@/components/top-tools/index.vue"
import useUserStore from "@/stores/user"
import { storeToRefs } from "pinia"
const userStore = useUserStore()
const { userInfo, userMenus } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
.container {
  .navigation-menu {
  }
  .top-bar-container {
    .top-bar {
      width: 100%;
      display: flex;
      height: 100%;
      line-height: 50px;
      .top-bar-left {
        flex: 1;
      }
      .top-bar-right {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
  .page {
  }
  .footer {
  }
}
</style>
