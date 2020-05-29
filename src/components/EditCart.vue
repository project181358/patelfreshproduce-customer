<template>
  <v-card width="500px">
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
              <!-- <span class="overline">Quantity:</span> -->
              <v-btn icon x-small :disabled="isdisabled">
                <v-icon :disabled="item.quantity == 1" @click="decrementeqty(item)">mdi-minus</v-icon>
              </v-btn>
              <p
                style="max-width:40px"
                class="mx-2 d-inline-flex text-center caption"
              >
                {{ item.quantity }}
              </p>
              <v-btn icon x-small :disabled="isdisabled">
                <v-icon :disabled="item.quantity == 5" @click="incrementqty(item)">mdi-plus</v-icon>
              </v-btn>
              <!-- <span class="overline">Cost :</span> -->
              <span class="caption pl-3 d-inline-block" style="width:55px">{{
                "$ " + item.price
              }}</span>
            </span>
          </div>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            :disabled="isdisabled"
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
      <!-- <v-btn
        color="primary"
        text
        @click="isdisabled = false"
        to="/checkout"
        >Edit Cart</v-btn
      > -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    isdisabled: Boolean
  },
  data: () => ({}),
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
    }
  },
  methods: {
    checkqty(item) {
      if (item.quantity <= 0) item.quantity = 1;
    },
    incrementqty(item) {
      item.quantity += 1;
    },
    decrementeqty(item) {
      item.quantity -= 1;
    },
    removefromcart(item) {
      this.$store.commit("REMOVE_FROM_CART", item);
    }
  }
};
</script>
