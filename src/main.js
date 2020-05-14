import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Carousel3d from "vue-carousel-3d";

Vue.use(BootstrapVue);
Vue.use(Carousel3d);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
