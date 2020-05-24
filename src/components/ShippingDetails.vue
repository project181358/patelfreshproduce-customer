<template>
  <v-form ref="form" v-model="valid" :lazy-validation="true">
    <v-text-field
      v-model="email"
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
        :counter="10"
        :rules="nameRules"
        label="First Name"
        class="pr-2"
        required
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="details.secondname"
        :counter="10"
        :rules="nameRules"
        label="Second Name"
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
    <v-text-field
      v-model="details.address2"
      label="Address 2"
      hide-details
      outlined
      dense
    ></v-text-field>
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
        label="Pin"
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
  data() {
    return {
      valid: true,
      details: {
        firstname: "",
        lastname: "",
        address1: "",
        address2: "",
        phone: "",
        city: "",
        state: "",
        pin: ""
      },
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  }
};
</script>
