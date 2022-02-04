import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vuelidate from "./plugins/vuelidate";
import axios from "axios";
axios.interceptors.request.use((config) => {
  const token = process.env.VUE_APP_API_KEY;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vuelidate,

  render: (h) => h(App),
}).$mount("#app");
