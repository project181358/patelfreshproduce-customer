import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

class CartItem {
  constructor(item) {
    this.item = item;
    this._quantity = 1;
  }
  get price() {
    return this.item.product_price * this.quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(i) {
    if (i > 0) {
      this._quantity = i;
    }
  }
}

export default new Vuex.Store({
  state: {
    vx_all_products: [],
    vx_cart: []
  },
  getters: {
    get_cartlen: state => {
      return state.vx_cart.length + "";
    }
  },
  mutations: {
    SET_ALL_PRODUCTS(state, items) {
      state.vx_all_products = items;
    },
    ADD_TO_CART(state, item) {
      let found = state.vx_cart.find(j => j.item.id == item.id);
      if (found) {
        found.quantity++;
      } else {
        state.vx_cart.push(new CartItem(item));
      }
    },
    REMOVE_FROM_CART(state, item) {
      let i = state.vx_cart.findIndex(j => j.item.id == item.id);
      state.vx_cart.splice(i, 1);
    },
    CLEAR_CART(state) {
      state.vx_cart = [];
    }
  },
  actions: {},
  modules: {}
});
