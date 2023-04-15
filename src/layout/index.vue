<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent
        :disable-resize-watcher="true"
        :expand-on-hover="true"
        :width="240"
      >
        <v-list color="transparent">
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-box"
            title="Account"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main style="min-height: 300px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup></script>

<style lang="scss" scoped></style>
