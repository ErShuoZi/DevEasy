<template>
  <div class="login">
    <LoginLeftSvg />
    <LoginForm />
  </div>
</template>

<script setup lang="ts" name="Login">
import LoginLeftSvg from "./cpns/login-left-Svg.vue"
import LoginForm from "./cpns/login-form.vue"
</script>

<style scoped lang="scss">
.login {
  min-width: 100%;
  min-height: 100%;
  display: flex;

  justify-content: space-around;
}
</style>
