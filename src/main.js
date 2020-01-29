import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "https://api.graphloc.com/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount("#app");
