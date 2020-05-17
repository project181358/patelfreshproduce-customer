<template>
  <v-app id="app">
    <v-app-bar flat fixed color="orange lighten-1 white--text">
      <v-toolbar-title>Patel Fresh Produce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text class="white--text">Home</v-btn>
      <v-btn to="/shop" text class="white--text">Shop</v-btn>
      <v-btn to="/about" text class="white--text">Contact</v-btn>
      <cart></cart>
    </v-app-bar>
    <v-content class="pt-12">
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart
  }
};
</script>
