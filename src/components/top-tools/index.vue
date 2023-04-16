<template>
  <div class="top-tools">
    <div class="tools">
      <ToggleTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
import ToggleTheme from "./cpns/toggle-theme/toggle-theme.vue"
</script>

<style scoped lang="scss">
.top-tools {
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  height: 50px;
  line-height: 50px;

  .tools {
    height: 50px;
  }
}
</style>
