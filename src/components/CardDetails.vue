<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="cardno"
      label="Card Number"
      required
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name on Card"
      required
      outlined
      dense
    ></v-text-field>
    <div class="d-flex">
      <v-text-field
        v-model="expiry"
        :rules="[v => /^\d{2}\/\d{2}$/.test(v)]"
        label="Expiry"
        hint="(MM/YY)"
        required
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="cvv"
        type="password"
        label="CVV"
        class="pl-2"
        :rules="[v => /^\d{3}$/.test(v)]"
        required
        outlined
        dense
      ></v-text-field>
    </div>
  </v-form>
</template>
<script>
export default {
  props: {
    cardvalid: Boolean
  },
  data() {
    return {
      cardno: "",
      name: "",
      expiry: "",
      cvv: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ]
    };
  },
  computed: {
    valid: {
      get() {
        return this.shippingvalid;
      },
      set(val) {
        this.$emit("validate", val);
      }
    }
  }
};
</script>
