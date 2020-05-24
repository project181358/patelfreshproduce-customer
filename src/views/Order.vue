<template>
  <v-container class="mt-8" style="min-height:100vh">
    <v-text-field
      style="max-width:350px"
      outlined
      v-model="id"
      label="Order Id"
      placeholder="Find Your Order"
      spellcheck="false"
      :append-icon="'mdi-magnify'"
      class="mx-auto"
      @click:append="getorder"
    >
    </v-text-field>
    <v-alert
      dense
      outlined
      dismissible
      v-model="err"
      max-width="350px"
      type="error"
      class="mx-auto"
    >
      Could not find order <strong>{{ id }}</strong>
    </v-alert>
    <v-row class="pt-5" v-if="order">
      <!-- it -->
      <!-- items -->
      <!-- order date -->
      <v-col md="6">
        <v-card outlined class="pa-3" min-height="150px">
          <div class="pt-2">
            <span class="overline">
              Order Id :
            </span>
            <span class="caption">
              {{ order.id }}
            </span>
          </div>
          <div class="pt-2">
            <span class="overline">
              Shipping Address :
            </span>
            <span class="body-2">
              {{ order.address }}
            </span>
          </div>
          <div class="pt-2">
            <span class="overline">
              Shipping Status :
            </span>
            <span class="body-2">
              Shipped
            </span>
          </div>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-simple-table class="elevation-1">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Product</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ getprod(item.id).product_name }}</td>
                <td>{{ "$ " + getprod(item.id).product_price }}</td>
                <td>{{ item.purchase_quantity }}</td>
                <td>{{ "$ " + item.total_price }}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Total :</td>
                <td>
                  {{
                    "$ " +
                      order.products.reduce(
                        (acc, item) => acc + item.total_price,
                        0
                      )
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";

export default {
  data: () => ({
    id: "",
    msg: "",
    order: null,
    err: false
  }),

  methods: {
    getorder() {
      if (!this.id) return;
      let data;
      (async () => {
        try {
          ({ data } = await API.graphql(
            graphqlOperation(queries.getOrder, { id: this.id })
          ));
          console.log(data);
          this.order = data.getOrder;
          if (this.order) this.err = false;
          else this.err = true;
        } catch (err) {
          this.err = true;
          console.log(err);
        }
      })();
    },
    getprod(id) {
      console.log(id);
      let res = this.$store.state.vx_all_products.find(p => p.id == id);
      console.log(res);
      return res;
    },
    getproducts(idarr) {
      return idarr.map(this.getprod);
    }
  }
};
</script>
