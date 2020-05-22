<template>
  <v-app id="app">
    <v-app-bar flat fixed color="orange lighten-1 white--text">
      <v-toolbar-title>Patel Fresh Produce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text class="white--text">Home</v-btn>
      <v-btn to="/shop" text class="white--text">Shop</v-btn>
      <v-btn to="/about" text class="white--text">About</v-btn>
      <cart></cart>
    </v-app-bar>
    <v-content class="pt-12">
      <router-view />
    </v-content>
    <v-footer dark padless class="orange lighten-1">
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <v-divider class="orange lighten-4"></v-divider>
        </v-col>
        <v-col md="4" cols="12">
          <v-card flat tile class="orange lighten-1 white--text pl-6 pr-2">
            <p class="title pt-2">Have Questions?</p>
            <div>
              <div
                v-for="(citem, i) in contactinfo"
                :key="i"
                class="d-flex pb-2"
              >
                <v-icon small class="pr-3">
                  {{ citem.icon }}
                </v-icon>

                <span class="body-2" style="white-space:pre"
                  >{{ citem.data }}
                </span>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col  md="4" cols="12">
          <v-card flat tile class="orange lighten-1 white--text">
            <p class="title pt-2 pl-3">Help</p>
          </v-card>
        </v-col>
        <v-col  md="4" cols="12">
          <v-card flat tile class="orange lighten-1 white--text">
            <p class="title pt-2 pl-3">Help</p>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-divider class="orange lighten-4"></v-divider>

          <v-card-text class="white--text text-center">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Patel Fresh Produce</strong>
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart
  },
  data() {
    return {
      contactinfo: [
        { icon: "mdi-phone", data: "KC +61 432 846 490" },
        { icon: "mdi-phone", data: "JAY +61 430 126 531" },
        { icon: "mdi-email", data: "patelfreshproduce@gmail.com" },
        {
          icon: "mdi-map-marker",
          data:
            "Dandenong Market,\nCorner of Clow and Cleeland St.,\nDandenong, VIC 3175"
        }
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>
