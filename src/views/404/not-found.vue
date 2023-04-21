<template>
  <div class="not-found">
    <v-img :width="300" :src="getAssetUrl('404.png')" />
    <h2>您似乎来到了知识的边界~</h2>
  </div>
</template>

<script setup lang="ts">
import { getAssetUrl } from "@/utils/getAssets"
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50% - 10%);
  h2 {
    margin-top: 20px;
    color: #808182;
  }
}
</style>
