<template>
  <div class="user-menus">
    <v-list>
      <v-list-item
        :prepend-avatar="getAssetUrl('avatar.jpg')"
        :title="userInfo.username"
        :subtitle="userInfo.useremail"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <template v-for="(menu, index) in userMenus" :key="index">
        <v-list-item
          prepend-icon="mdi-folder"
          :title="menu.name"
          :value="menu.name"
          :to="menu.path"
        >
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
import { getAssetUrl } from "@/utils/getAssets"
import { defineProps, computed } from "vue"
import type { IUserMenus, IUserInfo } from "@/stores/types/index"
const props = defineProps({
  userInfo: {
    type: Object as () => IUserInfo,
    required: true
  },
  userMenus: {
    type: Array<IUserMenus>,
    required: true
  }
})

const userInfo = computed(() => props.userInfo)
const userMenus = computed(() => props.userMenus)
</script>

<style scoped></style>
