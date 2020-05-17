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
        this.$store.commit("SET_ALL_PRODUCTS", data.listProducts.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }
};
</script>
