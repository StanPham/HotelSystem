<template>
<v-toolbar app :color="'#c5d8fa'" :elevation="2">
    <v-toolbar-title class="headline text-uppercase">
      <span>Dardenelle </span>
      <span>Lake Inn</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat 
      :to="{ name: 'signup'}"
    >
      <span> Sign Up! </span>
    </v-btn>
  </v-toolbar>
</template>