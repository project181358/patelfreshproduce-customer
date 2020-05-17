<template>
  <v-app>
    <amplify-authenticator :authConfig="authConfig" class="mx-auto mt-6">
      <!-- The rest of your app code -->
      <amplify-sign-in></amplify-sign-in>
    </amplify-authenticator>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      authConfig: {
        signUpConfig: {
          signUpFields: [
            {
              key: "email",
              label: "Email",
              required: true,
              type: "string",
              displayOrder: 0
            },
            {
              key: "password",
              label: "Password",
              required: true,
              type: "password",
              displayOrder: 1
            }
          ],
          hiddenDefaults: ["phone_number"]
        }
      }
    };
  },
  mounted() {
    if (this.$store.state.signedIn == true) {
      // console.log("mounted");
      this.$router.push("/dashboard");
    }
  }
};
</script>
