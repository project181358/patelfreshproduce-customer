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
          :src="item.product_image || 'https://via.placeholder.com/270x150'"
        >
        </v-img>
        <v-card-title class="pb-1">
          <p class="mb-0">
            {{ item.product_name }}
          </p>

          <v-spacer></v-spacer>
          <p class="body-2 mb-0 mt-0">
            {{ "$ " + item.product_price + " / " + item.product_measure }}
          </p>
        </v-card-title>
        <p v-if="!item.available" class="overline red--text mb-0 pl-3">
          *Out Of Stock
        </p>
        <v-card-actions class="pt-0">
          <v-btn
            text
            :disabled="!item.available"
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
