<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <div class="pr-3">
        <v-badge color="red" :content="cartlen">
          <v-btn icon small class="white--text" v-on="on">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-badge>
      </div>
    </template>
    <v-card width="400px">
      <v-list>
        <v-list-item v-if="cartlen == 0">
          <v-list-item-subtitle class="text-center"
            >your cart is empty</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item v-for="(item, i) in cart" :key="i">
          <v-list-item-avatar>
            <img src="https://via.placeholder.com/50" alt="item" />
          </v-list-item-avatar>

          <v-list-item-content>
            <div>
              <span>
                {{ item.item.product_name }}
              </span>
              <span class="float-right">
                <!-- <v-btn icon x-small>
                  <v-icon>mdi-minus</v-icon>
                </v-btn> -->
                <span class="overline">Qty:</span>
                <p
                  style="max-width:40px"
                  class="mx-1 d-inline-flex text-center caption"
                >
                  {{ item.quantity }}
                </p>
                <!-- <v-btn icon x-small>
                  <v-icon>mdi-plus</v-icon>
                </v-btn> -->
                <span class="caption pl-3 d-inline-block" style="width:55px">{{
                  "$ " + item.price
                }}</span>
              </span>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              :disabled="freezecart"
              icon
              x-small
              @click="removefromcart(item)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-card-actions>
        <p class="body-2 pl-3">
          Cart Total : <span class="green--text">{{ "$ " + carttotal }}</span>
        </p>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="cartlen == 0 || $route.name == 'Checkout'"
          text
          @click="menu = false"
          to="/checkout"
          >Checkout</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    menu: false
  }),
  computed: {
    cartlen() {
      return this.$store.getters.get_cartlen;
    },
    cart() {
      return this.$store.state.vx_cart;
    },
    carttotal() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.item.product_price,
        0
      );
    },
    freezecart() {
      return this.$route.name == "Checkout";
    }
  },
  methods: {
    checkqty(item) {
      if (item.quantity <= 0) item.quantity = 1;
    },
    removefromcart(item) {
      this.$store.commit("REMOVE_FROM_CART", item);
    }
  }
};
</script>
