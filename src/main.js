import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import "@aws-amplify/ui-vue";
import aws_exports from "./aws-exports";

const apiconfig = {
  aws_appsync_graphqlEndpoint:
    "https://phkajatcwvdjlpx3mxs5jw3idy.appsync-api.ap-south-1.amazonaws.com/graphql",
  aws_appsync_region: "ap-south-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-kdt3hik5zfgdvdzagdjc6bbmpq"
};
Amplify.configure({ ...aws_exports, ...apiconfig });
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$Amplify = Amplify;
