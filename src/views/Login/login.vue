<template>
  <div class="login">
    <TopTools :isLogin="true" />
    <v-card class="auth-card-v1 text-center d-flex align-center h-screen">
      <v-img aspect-ratio="2" :src="getAssetUrl('login-bg.png')"></v-img>

      <LoginForm />
    </v-card>
  </div>
</template>

<script setup lang="ts" name="Login">
import TopTools from "@/components/top-tools/index.vue"
import LoginForm from "./cpns/login-form.vue"
import { getAssetUrl } from "@/utils/getAssets"
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  .auth-card-v2 {
    /* background-color: red; */
  }
}
</style>
