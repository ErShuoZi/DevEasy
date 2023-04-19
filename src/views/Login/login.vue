<template>
  <v-row no-gutters class="h-100 d-flex align-center">
    <v-col
      class="h-100 d-none d-lg-flex justify-center align-center"
      cols="12"
      lg="8"
    >
      <v-responsive :aspect-ratio="16 / 9" max-width="768px">
        <v-img
          :src="
            isDark ? getAssetUrl('login-dark.png') : getAssetUrl('login-bg.png')
          "
        ></v-img>
      </v-responsive>
    </v-col>
    <v-col class="h-100" cols="12" lg="4">
      <v-card
        class="pa-2 h-100 d-flex justify-center align-center"
        color="loginFormBg"
      >
        <div class="d-block">
          <v-card-text>
            <div class="text-h5">Welcome to DevEasy! 👏🏻</div>
            <p>Please sign-in to your account and start the adventure</p>
          </v-card-text>
          <v-card-text>
            <v-alert color="secondary" class="text-primary">
              <p class="mb-2">Admin Email: admin@demo.com / Pass: admin</p>
              <p class="mb-2">Client Email: client@demo.com / Pass: client</p>
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-row>
                <v-col cols="12">
                  <!-- model-value="admin" -->
                  <v-text-field
                    v-model="userInfo.username"
                    label="Email"
                    variant="outlined"
                    hide-details
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <!--   model-value="123456" -->
                  <v-text-field
                    color="primary"
                    v-model="userInfo.password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    hide-details
                    append-inner-icon="mdi-eye"
                  ></v-text-field>

                  <div
                    class="d-flex justify-space-between align-center mt-1 mb-4"
                  >
                    <v-checkbox label="Remember me" hide-details></v-checkbox>
                    <a href="">Forgot Password</a>
                  </div>

                  <div>
                    <v-btn color="primary" type="submit" block>LOGIN</v-btn>
                  </div>
                  <div class="d-flex justify-center mt-2">
                    <p>New on our platform? Create an account</p>
                  </div>

                  <div class="d-flex align-center">
                    <v-divider></v-divider>
                    <span class="mx-4">or</span>
                    <v-divider></v-divider>
                  </div>

                  <v-row class="d-flex justify-center mt-3">
                    <div class="mx-4">
                      <SvgIcon
                        :iconStyle="{ width: '24px', height: '24px' }"
                        iconName="github"
                      ></SvgIcon>
                    </div>
                    <div class="mx-4">
                      <SvgIcon
                        :iconStyle="{ width: '24px', height: '24px' }"
                        iconName="twitter"
                      ></SvgIcon>
                    </div>
                    <div class="mx-4">
                      <SvgIcon
                        :iconStyle="{ width: '24px', height: '24px' }"
                        iconName="facebook"
                      ></SvgIcon>
                    </div>
                    <div class="mx-4">
                      <SvgIcon
                        :iconStyle="{ width: '24px', height: '24px' }"
                        iconName="google"
                      ></SvgIcon>
                    </div>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue"
import { getAssetUrl } from "@/utils/getAssets"
import useUserStore from "@/stores/user"
import { useTheme } from "vuetify"
const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

const userInfo = reactive({
  username: "",
  password: ""
})
const userStore = useUserStore()

const submit = (event: any) => {
  console.log(event)
  userStore.UserLoginAction(userInfo)
}
</script>

<style lang="scss" scoped></style>
