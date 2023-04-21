<template>
  <div class="user-menus">
    <v-list>
      <v-list-item>
        <div class="d-flex align-center">
          <div class="mr-3">
            <svg-icon
              icon-name="logo"
              :iconStyle="{ width: '30px', height: '24px' }"
            ></svg-icon>
          </div>
          <div>
            <h1
              class="nav-title font-weight-medium leading-normal text-uppercase"
            >
              devEasy
            </h1>
          </div>
        </div>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list active-color="text-white">
      <UserMenus :menu="userMenus" />
    </v-list>
  </div>
</template>

<script lang="ts" setup name="UserMenus">
import { defineProps, computed } from "vue"
import type { IUserMenus } from "@/stores/types/index"
import UserMenus from "./cpns/user-menus-item.vue"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"
const props = defineProps({
  userMenus: {
    type: Array as () => IUserMenus[],
    required: true
  }
})
const userMenus = computed(() => props.userMenus)
</script>

<style scoped lang="scss">
.nav-title {
  font-size: 1.25rem;
}
</style>
