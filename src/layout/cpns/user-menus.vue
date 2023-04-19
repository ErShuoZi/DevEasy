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

    <v-list active-color="text-white ">
      <template v-for="(menu, index) in userMenus" :key="index">
        <v-hover>
          <v-list-item
            :prepend-icon="menu.icon"
            :title="$t(`message.${menu.name}`)"
            :value="menu.name"
            :to="menu.path"
            :ripple="false"
            active-class="custom-active"
            class="custom-list-item"
          >
          </v-list-item>
        </v-hover>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import type { IUserMenus } from "@/stores/types/index"
import SvgIcon from "@/components/SvgIcon/svg-icon.vue"
const props = defineProps({
  userMenus: {
    type: Array<IUserMenus>,
    required: true
  }
})
const userMenus = computed(() => props.userMenus)
</script>

<style scoped lang="scss">
.nav-title {
  font-size: 1.25rem;
}
.custom-list-item {
  box-sizing: border-box;
  block-size: 2.625rem !important;
  border-end-end-radius: 3.125rem !important;
  border-end-start-radius: 0 !important;
  border-start-end-radius: 3.125rem !important;
  border-start-start-radius: 0 !important;
  margin-block-end: 20px;
}
.custom-active {
  background: #885ce9;
  color: #fff;
}
</style>
