<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, defineProps } from "vue"
interface SvgIconProps {
  iconName: string
}
const props = defineProps<SvgIconProps>()
const symbolId = computed(() => `#svgIcon-${props.iconName}`)
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script> -->
