<template>
  <v-row>
    <v-col
      v-for="(item, i) in products"
      :key="i"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card max-height="300px" outlined>
        <v-img
          class="align-end"
          height="150px"
          src="https://via.placeholder.com/300"
        >
        </v-img>
        <v-card-title class="pb-0">
          <span>
            {{ item.product_name }}
          </span>
          <v-spacer></v-spacer>
          <span class="body-2">
            {{ "$ " + item.product_price + " KG" }}
          </span>
        </v-card-title>
        <v-card-actions>
          <v-btn
            text
            class="orange--text text--lighten-1"
            @click="addtocart(item)"
          >
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <!-- grid of cards -->
</template>
<script>
export default {
  //  all products
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.vx_all_products;
    }
  },
  methods: {
    addtocart(item) {
      this.$store.commit("ADD_TO_CART", item);
    }
  }
  //
};
</script>
<style lang="scss" scoped></style>
