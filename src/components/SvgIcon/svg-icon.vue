<template>
  <svg :style="props.iconStyle" class="svg-icon" aria-hidden="true">
    <use :href="symbolId"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, defineProps } from "vue"
import type { CSSProperties } from "vue"
interface SvgIconProps {
  iconName: string
  iconStyle?: CSSProperties
}
const props = withDefaults(defineProps<SvgIconProps>(), {
  iconStyle: () => ({ width: "100px", height: "100px" })
})

console.log(props.iconStyle)
const symbolId = computed(() => `#svgIcon-${props.iconName}`)
</script>

<style lang="scss" scoped></style>
