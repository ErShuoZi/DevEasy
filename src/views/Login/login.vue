<template>
  <div class="login">
    <TopTools />
    <div class="login-main">
      <LoginLeftSvg />
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import TopTools from "@/components/top-tools/index.vue"
import LoginLeftSvg from "./cpns/login-left-Svg.vue"
import LoginForm from "./cpns/login-form.vue"
</script>

<style scoped lang="scss">
.login {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .login-main {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
}
</style>
