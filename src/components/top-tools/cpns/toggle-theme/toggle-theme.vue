<template>
  <div class="toggle-theme">
    <span
      @click="toggleTheme"
      :class="['toggle-theme-icon', 'mdi', SwitchThemeIconClass]"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useTheme } from "vuetify"
const theme = useTheme()
const DarkActive = ref(false)
const toggleTheme = () => {
  DarkActive.value = !DarkActive.value
  if (DarkActive.value) {
    theme.global.name.value = "dark"
  } else {
    theme.global.name.value = "light"
  }
}
const SwitchThemeIconClass = computed(() =>
  DarkActive.value ? "mdi-weather-night" : "mdi-weather-sunny"
)
</script>

<style scoped lang="scss">
.toggle-theme {
  position: absolute;
  .toggle-theme-icon {
    position: absolute;
    z-index: 100;
    font-size: 24px;
  }
}
</style>
