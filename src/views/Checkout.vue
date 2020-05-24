<template>
  <v-row class="mt-5 pr-3">
    <v-col sm="12" cols="12" md="6" class="mx-4">
      <edit-cart :isdisabled="isdisabled"></edit-cart>
    </v-col>
    <v-col>
      <v-stepper v-model="step" vertical>
        <v-stepper-step :complete="step > 1" step="1">
          Shipping Details
        </v-stepper-step>

        <v-stepper-content step="1">
          <shipping-details
            ref="shipping"
            :tmpdetails="details"
            @edit-details="editdetails"
            :shippingvalid="shippingvalid"
            @validate="v => setvalidate('shippingvalid', v)"
          ></shipping-details>
          <v-btn
            outlined
            color="primary"
            @click="validateAndContinue('shippingvalid', () => (step = 2))"
            >Continue</v-btn
          >
          <v-btn text to="/shop">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="step > 2" step="2"
          >Payement Details</v-stepper-step
        >
        <v-stepper-content step="2">
          <v-tabs v-model="paytab" grow>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#card">
              Card
            </v-tab>
            <v-tab href="#paypal">
              Paypal
            </v-tab>
            <v-tabs-items v-model="paytab">
              <v-tab-item value="card">
                <v-card flat tile height="250px">
                  <card-details
                    ref="card"
                    class="pt-5"
                    :cardvalid="cardvalid"
                    @validate="v => setvalidate('cardvalid', v)"
                  ></card-details>
                </v-card>
              </v-tab-item>
              <v-tab-item value="paypal">
                <v-card flat tile height="250px" class="pt-8">
                  <v-img
                    contain
                    height="40px"
                    src="@/assets/paypal.svg"
                  ></v-img>

                  <v-btn
                    large
                    color="primary"
                    width="100px"
                    class="d-block mx-auto mt-4"
                  >
                    Pay Now
                  </v-btn>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
          <v-btn
            outlined
            color="primary"
            @click="validateAndContinue('cardvalid', purchase)"
            >Continue</v-btn
          >
          <v-btn text to="/shop">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="step > 3" step="3"
          >Finish Order</v-stepper-step
        >
        <v-stepper-content step="3">
          <v-card color="success" class="mb-12" height="200px">
            <v-icon
              x-large
              color="white"
              class="d-block mx-auto text-center pt-5"
              >mdi-check</v-icon
            >
            <v-card-text class="white--text title text-center">
              Order Succeesful
            </v-card-text>
            <p class="white--text body-2 text-center">
              Order id : {{ order.id }}
            </p>
          </v-card>
          <v-btn text class="orange--text" to="/shop">Continue Shopping</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import ShippingDetails from "@/components/ShippingDetails.vue";
import EditCart from "@/components/EditCart.vue";
import CardDetails from "@/components/CardDetails.vue";
import { API, graphqlOperation } from "aws-amplify";
import * as mutation from "@/graphql/mutations";

export default {
  components: {
    ShippingDetails,
    CardDetails,
    EditCart
  },

  data() {
    return {
      isdisabled: false,
      details: {
        firstname: "",
        lastname: "",
        address1: "",
        address2: "",
        phone: "",
        city: "",
        state: "",
        pin: "",
        email: ""
      },
      paytab: "",
      cardvalid: true,
      shippingvalid: true,
      step: 1,
      order: {}
    };
  },

  methods: {
    validateAndContinue(r, next) {
      if (this[r]) {
        this.isdisabled = true;
        next();
      }
    },
    editdetails(item) {
      this.details = item;
    },
    purchase() {
      let h = this.details;
      // mutation
      // {products: [{id,purchase_quantity,total_price}],full_name ,address(combine all details),email,phone}
      //
      let input = {
        products: this.$store.state.vx_cart.map(i => ({
          id: i.item.id,
          purchase_quantity: i.quantity,
          total_price: i.price
        })),
        full_name: h.firstname + " " + h.lastname,
        email: h.email,
        phone: h.phone || null,
        address: `${h.address1}, ${h.address2}, ${h.city},${h.state}, PIN: ${h.pin}`
      };

      let data;
      (async () => {
        try {
          ({ data } = await API.graphql(
            graphqlOperation(mutation.createOrder, { input })
          ));
          console.log(data);
          this.order = data.createOrder;
          this.step = 3;
        } catch (err) {
          console.log(err);
        }
      })();
    },
    setvalidate(prop, v) {
      this[prop] = v;
    }
  }
};
</script>
