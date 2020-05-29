<template>
  <div class="text-center">
    <v-dialog v-model="_dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ product.product_name }}
        </v-card-title>
        <v-img
          class="white--text align-end"
          height="200px"
          contain
          :src="product.product_image || 'https://via.placeholder.com/500x200'"
        ></v-img>
        <v-card-text>
          <div class="pt-2">
            <p v-if="!product.available" class="overline red--text mb-0">
              *Out Of Stock
            </p>
            <p class="title">
              {{
                "$ " + product.product_price + " / " + product.product_measure
              }}
            </p>
          </div>
          <p>
            {{ product.product_cart_description }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :disabled="!product.available"
            color="primary"
            text
            @click="addtocart"
          >
            Add to cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    product: Object
  },
  data() {
    return {};
  },
  computed: {
    _dialog: {
      get() {
        return this.dialog;
      },
      set() {
        this.$emit("close-dialog");
      }
    }
  },
  methods: {
    addtocart() {
      this._dialog = false;
      this.$emit("add-to-cart", this.product);
    }
  }
};
</script>
