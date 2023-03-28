<template>
  <v-toolbar app :color="'#c5d8fa'" :elevation="2">
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/customer" class="toolbar-link">
        Dardanelle Lake Inn
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat 
      to="/signup"
    >
      <span> Sign Up! </span>
    </v-btn>
  </v-toolbar>
</template>

<style scoped>
.toolbar-link {
  color: inherit;
  text-decoration: none;
}
</style>
