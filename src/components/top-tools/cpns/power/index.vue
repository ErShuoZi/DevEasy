<template>
  <span @click="quit" class="mdi mdi-power"></span>
</template>

<script setup lang="ts">
import { localCache } from "@/utils/DevEasyCache"
import { useRouter } from "vue-router"
const router = useRouter()
const quit = () => {
  localCache.clearCache()

  router.push("/")
}
</script>

<style lang="scss" scoped></style>
