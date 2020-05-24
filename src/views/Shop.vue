<template>
  <v-container class="pa-5">
    <gallery></gallery>
  </v-container>
</template>

<script>
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Home",
  components: {
    Gallery
  },
  data() {
    return {};
  }
};
</script>
