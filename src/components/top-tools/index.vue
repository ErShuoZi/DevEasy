<template>
  <div class="top-tools">
    <div class="tools">
      <span class="font-icon"><ToggleTheme /></span>
      <span v-if="!props.isLogin" class="font-icon"> <Power /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import ToggleTheme from "./cpns/toggle-theme/toggle-theme.vue"
import Power from "./cpns/power/index.vue"

const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.top-tools {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .tools {
    display: flex;
    margin-right: 40px;
  }
}
</style>
