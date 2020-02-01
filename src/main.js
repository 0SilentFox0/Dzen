import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import VueTheMask from "vue-the-mask";
import VueI18n from 'vue-i18n';
import store from './store';


const apolloClient = new ApolloClient({
  uri: "https://api.graphloc.com/graphql"
});


const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;
Vue.use(VueTheMask);
Vue.use(VueApollo);
Vue.use(VueI18n);


const messages = {
  en: {
    message: {
      ipAdress: 'IP Adress',
      result: 'Result',
      history: 'History',
      continent: 'Continent/code',
      country: 'Country/code',
      city: 'City',
      postcode: 'Postcode',
      coords: 'Coordinates',
      getInfo: 'Get information',
      clear: 'Clear history',
      error: 'Error'
    }
  },
  ru: {
    message: {
      ipAdress: 'IP адрес',
      result: 'Результат запроса',
      history: 'История',
      continent: 'Континент/код континета',
      country: 'Страна/код страны',
      city: 'Город',
      postcode: 'Почтовый индекс',
      coords: 'Координаты',
      getInfo: 'Получить информацию',
      clear: 'Очистить историю',
      error: 'Ошибка'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


new Vue({
  i18n,
  store,
  render: h => h(App),
  apolloProvider
}).$mount("#app");
