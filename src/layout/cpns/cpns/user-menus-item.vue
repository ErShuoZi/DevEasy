<template>
  <template v-for="(item, index) in prop.menu" :key="index">
    <v-list-item
      lines="two"
      v-if="!item.children"
      :prepend-icon="item.icon"
      :title="$t(`message.${item.name}`)"
      :value="item.name"
      :to="item.path"
      :ripple="false"
      active-class="custom-active"
      class="custom-list-item"
    >
    </v-list-item>
    <v-list-group fluid v-else>
      <template v-slot:activator="{ props }">
        <v-list-item
          lines="two"
          v-bind="props"
          :prepend-icon="item.icon"
          :title="$t(`message.${item.name}`)"
        >
        </v-list-item>
      </template>
      <user-menus-item :menu="item.children" /></v-list-group
  ></template>
</template>

<script setup lang="ts" name="UserMenusItem">
const prop = defineProps({
  menu: {
    type: Object,
    required: true
  }
})
console.log(prop.menu)
</script>

<style lang="scss" scoped>
.custom-list-item {
  box-sizing: border-box;
  block-size: 2.625rem !important;
  border-end-end-radius: 3.125rem !important;
  border-end-start-radius: 0 !important;
  border-start-end-radius: 3.125rem !important;
  border-start-start-radius: 0 !important;
  margin-block-end: 20px;
}
.custom-active {
  background: #885ce9;
  color: #fff;
}
</style>
