<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="details.email"
      :rules="emailRules"
      label="E-mail"
      type="email"
      required
      outlined
      dense
    ></v-text-field>
    <p>Shipping Details</p>

    <div class="d-flex">
      <v-text-field
        v-model="details.firstname"
        name="fname"
        :counter="10"
        :rules="nameRules"
        label="First Name"
        class="pr-2"
        required
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="details.lastname"
        :counter="10"
        :rules="nameRules"
        label="Second Name"
        name="lname"
        required
        outlined
        dense
      ></v-text-field>
    </div>
    <v-text-field
      v-model="details.address1"
      label="Address 1"
      :rules="[v => !!v || 'Address is required']"
      required
      outlined
      dense
    ></v-text-field>
    <div class="d-flex pt-3">
      <v-text-field
        v-model="details.address2"
        label="Address 2"
        hide-details
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="details.phone"
        name="phone"
        label="Phone"
        :rules="phonerules"
        hide-details
        outlined
        dense
      ></v-text-field>
    </div>
    <div class="d-flex pt-3">
      <v-text-field
        v-model="details.state"
        label="State"
        :rules="[v => !!v || 'State is required']"
        required
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="details.city"
        class="px-2"
        label="City"
        :rules="[v => !!v || 'City is required']"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="details.pin"
        name="zip"
        label="Zip"
        :rules="[
          v => (!!v && /^\d{4,6}$/.test(v)) || 'Please enter valid zipcode'
        ]"
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
    tmpdetails: Object,
    shippingvalid: Boolean
  },
  data() {
    return {
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phonerules: [
        v =>
          v
            ? /^0\d+/.test(v) || /^\+\d+/.test(v)
              ? true
              : "Phone number invalid"
            : true
      ]
    };
  },
  computed: {
    details: {
      get() {
        return this.tmpdetails;
      },
      set(item) {
        this.$emit("edit-details", item);
      }
    },
    valid: {
      get() {
        return this.shippingvalid;
      },
      set(val) {
        this.$emit("validate", val);
      }
    }
  },
  methods: {}
};
</script>
