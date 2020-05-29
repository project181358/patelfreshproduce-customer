<template>
  <v-container class="pa-5">
    <gallery></gallery>
  </v-container>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";
export default {
  name: "Home",
  components: {
    Gallery
  },
  data() {
    return {};
  },
  beforeMount() {
    let data;
    (async () => {
      try {
        ({ data } = await API.graphql(graphqlOperation(queries.listProducts)));
        // console.log(data);
        // console.log(errors);
        let filtered = data.listProducts.items.map(k => {
          if (
            k.product_stock.reduce((acc, stock) => stock.quantity + acc, 0) >= 5
          )
            k.available = false;
          else k.available = true;
          return k;
        });
        this.$store.commit("SET_ALL_PRODUCTS", filtered);
      } catch (err) {
        console.log(err);
      }
    })();
  }
};
</script>
