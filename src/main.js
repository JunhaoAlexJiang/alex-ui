import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import alButton from "@/components/button.vue";

Vue.config.productionTip = false;
Vue.component("alButton", alButton);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
