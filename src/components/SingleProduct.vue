<template>
  <div class="text-center">
    <v-dialog v-model="_dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ product.product_name }}
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addtocart">
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
