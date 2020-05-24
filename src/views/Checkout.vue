<template>
  <v-row class="mt-5 pr-3">
    <v-col sm="12" cols="12" md="6" class="mx-4"> </v-col>
    <v-col>
      <v-stepper v-model="step" vertical>
        <v-stepper-step :complete="step > 1" step="1">
          Shipping Details
        </v-stepper-step>

        <v-stepper-content step="1">
          <shipping-details></shipping-details>
          <v-btn
            outlined
            color="primary"
            @click="validateAndContinue(() => (step = 2))"
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
                  <card-details class="pt-5"></card-details>
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
            @click="validateAndContinue(() => (step = 3))"
            >Continue</v-btn
          >
          <v-btn text to="/shop">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="step > 3" step="3"
          >Finish Order</v-stepper-step
        >
        <v-stepper-content step="3">
          <v-card color="success" class="mb-12" height="200px">
              <v-icon x-large color="white" class="d-block mx-auto text-center pt-5">mdi-check</v-icon>
              <v-card-text class="white--text title text-center">
                  Order Succeesful
              </v-card-text>
              <p class="white--text body-2 text-center">
                  Order id : asfdad-sadasd-sad-f-dsafd
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
import CardDetails from "@/components/CardDetails.vue";
export default {
  components: {
    ShippingDetails,
    CardDetails
  },

  data() {
    return {
      paytab: "",
      valid: true,
      cardvalid: true,
      step: 1,
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"]
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    validateAndContinue(next) {
      //   this.validate();
      //   if (this.valid) {
      //     next();
      //   }
      next();
    }
  }
};
</script>
