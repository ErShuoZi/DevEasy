<template>
  <div class="login-form">
    <div class="web-dec">
      <v-switch
        prepend-icon="mdi-view-dashboard"
        class="switch"
        color="red"
        value="red"
        hide-details
      ></v-switch>
      <div class="logo">
        <SvgIcon
          :iconStyle="{ width: '60px', height: '52px' }"
          iconName="logo"
        />
      </div>
      <div class="logo-text">DevEasy</div>
    </div>
    <v-sheet class="grey-lighten-3" rounded>
      <v-card class="mx-auto px-6 py-8">
        <v-form class="form" ref="LoginFormRef" v-model="valid">
          <v-text-field
            v-model="userInputInfo.username"
            :rules="userNamerules"
            :label="userNameInputStyleConfig.label"
            :hint="userNameInputStyleConfig.hint"
            :placeholder="userNameInputStyleConfig.placeholder"
            :shaped="userNameInputStyleConfig.shaped"
            :outlined="userNameInputStyleConfig.outlined"
            :rounded="userNameInputStyleConfig.rounded"
            :solo="userNameInputStyleConfig.solo"
            :single-line="userNameInputStyleConfig.singleLine"
            :filled="userNameInputStyleConfig.filled"
            :clearable="userNameInputStyleConfig.clearable"
            :persistent-hint="userNameInputStyleConfig.persistentHint"
            :loading="userNameInputStyleConfig.loading"
            :flat="userNameInputStyleConfig.flat"
            :dense="userNameInputStyleConfig.dense"
            :color="userNameInputStyleConfig.color"
          ></v-text-field>
          <v-text-field
            v-model="userInputInfo.password"
            :rules="Passwordrules"
            :label="passwordInputStyleConfig.label"
            :hint="passwordInputStyleConfig.hint"
            :placeholder="passwordInputStyleConfig.placeholder"
            :shaped="passwordInputStyleConfig.shaped"
            :outlined="passwordInputStyleConfig.outlined"
            :rounded="passwordInputStyleConfig.rounded"
            :solo="passwordInputStyleConfig.solo"
            :single-line="passwordInputStyleConfig.singleLine"
            :filled="passwordInputStyleConfig.filled"
            :clearable="passwordInputStyleConfig.clearable"
            :persistent-hint="passwordInputStyleConfig.persistentHint"
            :loading="passwordInputStyleConfig.loading"
            :flat="passwordInputStyleConfig.flat"
            :dense="passwordInputStyleConfig.dense"
            :color="passwordInputStyleConfig.color"
          ></v-text-field>
          <v-btn
            width="100%"
            @click="submit"
            color="primary--blue"
            :loading="SubmitLogin"
            >Submit</v-btn
          >
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import type { IUserInputInfo } from "./types/index"
import UserStore from "@/stores/user"

const userInputInfo = reactive<IUserInputInfo>({
  username: "",
  password: ""
})
const userNamerules: any = [
  (value: any) => {
    if (value) return true
    return "You must enter username."
  }
]
const Passwordrules: any = [
  (value: any) => {
    if (value) return true
    return "You must enter password."
  }
]

const userNameInputStyleConfig = reactive({
  model: "",
  label: "UserName",
  hint: "Enter your username to access this website",
  color: "#3872e0",
  placeholder: "admin",
  shaped: false,
  outlined: false,
  rounded: false,
  solo: false,
  singleLine: false,
  filled: false,
  clearable: false,
  persistentHint: false,
  loading: false,
  flat: false,
  counterEn: false,
  counter: 0,
  dense: false
})

const passwordInputStyleConfig = reactive({
  model: "",
  label: "Password",
  hint: "Enter your password to access this website",
  placeholder: "123456",
  color: "#3872e0",
  shaped: false,
  outlined: false,
  rounded: false,
  solo: false,
  singleLine: false,
  filled: false,
  clearable: false,
  persistentHint: false,
  loading: false,
  flat: false,
  counterEn: false,
  counter: 0,
  dense: false
})

const valid = ref(false)
const LoginFormRef = ref()
const useUserStore = UserStore()
const SubmitLogin = ref(false)
// 执行登录
const submit = () => {
  LoginFormRef.value.validate().then(async (valid: any) => {
    if (valid.valid) {
      SubmitLogin.value = true
      await useUserStore.UserLoginAction(userInputInfo)
      SubmitLogin.value = false
    }
    return
  })
}
</script>

<style scoped lang="scss">
.login-form {
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  min-width: 500px;
  min-height: 500px;
  margin-right: 70px;

  .web-dec {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    .switch {
      position: absolute;
      z-index: 100;
      top: -190px;
      right: -100px;
    }
    .logo-text {
      color: var(--font-color);
      font-size: 40px;
      font-weight: 700;
      padding-left: 15px;
    }
  }
  .form {
    width: 100%;
    .white--text {
      color: #fff;
    }
  }
}
</style>
