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
      <v-card
        max-height="300px"
        outlined
        @click="
          dialog = true;
          selproduct = item;
        "
      >
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
            {{ "$ " + item.product_price + " / BOX" }}
          </span>
        </v-card-title>
        <v-card-actions>
          <v-btn
            text
            class="orange--text text--lighten-1"
            @click.stop="addtocart(item)"
          >
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <single-product
      :dialog="dialog"
      :product="selproduct"
      @close-dialog="
        dialog = false;
        selproduct = {};
      "
      @add-to-cart="addtocart"
    ></single-product>
  </v-row>
  <!-- grid of cards -->
</template>
<script>
import SingleProduct from "@/components/SingleProduct.vue";
export default {
  components: {
    SingleProduct
  },
  data() {
    return {
      dialog: false,
      selproduct: {}
    };
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
