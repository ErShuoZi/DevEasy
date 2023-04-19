<template>
  <div class="user-menus">
    123

    <v-divider></v-divider>

    <v-list density="comfortable" nav>
      <template v-for="(menu, index) in userMenus" :key="index">
        <v-list-item
          :prepend-icon="menu.icon"
          :title="menu.name"
          :value="menu.name"
          :to="menu.path"
          lines="two"
        >
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import type { IUserMenus } from "@/stores/types/index"
const props = defineProps({
  userMenus: {
    type: Array<IUserMenus>,
    required: true
  }
})
const userMenus = computed(() => props.userMenus)
</script>

<style scoped></style>
