import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import DetailsPage from './views/layout/Details/DetailsPage'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
