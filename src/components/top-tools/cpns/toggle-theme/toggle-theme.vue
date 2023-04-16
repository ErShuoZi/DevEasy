<template>
  <span
    @click="toggleTheme"
    :class="['toggle-theme-icon', 'mdi', SwitchThemeIconClass]"
  ></span>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useTheme } from "vuetify"
const theme = useTheme()
const DarkActive = ref(false)
const toggleTheme = () => {
  DarkActive.value = !DarkActive.value
  if (DarkActive.value) {
    theme.global.name.value = "themeDarkConfig"
  } else {
    theme.global.name.value = "themeLightConfig"
  }
}
const SwitchThemeIconClass = computed(() =>
  DarkActive.value ? "mdi-weather-night" : "mdi-weather-sunny"
)
</script>

<style scoped lang="scss"></style>
