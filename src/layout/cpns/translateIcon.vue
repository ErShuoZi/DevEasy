<template>
  <v-menu location="bottom center" origin="top end">
    <template v-slot:activator="{ props }">
      <v-btn :icon="'mdi-translate'" v-bind="props"> </v-btn>
    </template>
    <v-list>
      <template v-for="(item, index) in FlagMapCountry" :key="index">
        <v-list-item @click="translateLanguage(item.language)">
          <template v-slot:prepend>
            <Icon :icon="`twemoji:flag-${item.county}`" class="mr-2" />
          </template>
          <span class="text-body-2"> {{ item.languageName }} </span>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import i18n from "@/plugins/vuei18n"
import FlagMapCountry from "@/plugins/languageConfig/languageSelectConfig"
import { localCache } from "@/utils/DevEasyCache"

const translateLanguage = (language: any) => {
  i18n.global.locale = language
  localCache.setCache("language", language)
}
</script>

<style lang="scss" scoped></style>
