<template>
  <v-container>
    <v-card class="mt-6 text-center orange darken-3">
      <p class="pt-5 headline white--text">Welcome to Patel Fresh Produce</p>
      <v-card-text
        style="max-width:400px"
        class="mx-auto orange--text text--lighten-4"
      >
        Keep you healthy.<span class="mb-3 d-block" />
        We are fruit and vegetables retailer who provides fresh and best stuff
        to you. We care about your health. Only Quality stuff will be provided.
      </v-card-text>
      <div class="d-flex justify-center">
        <v-btn x-large text class="white--text mb-5" to="/shop">Shop Now</v-btn>
      </div>
    </v-card>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="3"
        v-for="(item, i) in items"
        :key="i"
        class="pa-3 text-center"
      >
        <v-card height="180px" outlined>
          <p class="text-center pt-6">
            <v-icon large class="orange--text text--lighten-4">
              {{ item.icon }}
            </v-icon>
          </p>
          <p class="title mb-1 text-capitalize orange--text orange--lighten-1">
            {{ item.title }}
          </p>
          <p class="body-2 text-capitalize">{{ item.content }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Free Shipping",
          content: "On Order Over $100",
          icon: "mdi-car-pickup"
        },
        {
          title: "Always Fresh",
          content: "Product Well Package",
          icon: "mdi-flower"
        },
        {
          title: "Superior Quality",
          content: "Quality Products",
          icon: "mdi-certificate"
        },
        { title: "Support", content: "24/7 Support", icon: "mdi-tie" }
      ]
    };
  }
};
</script>
