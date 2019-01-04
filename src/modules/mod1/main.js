// import Vue from "vue";
// import App from "@/pages/App.vue";
// import store from "@/store/store";

// Vue.config.productionTip = false;

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount("#app");

import Vue from "vue";
import App from "@/pages/App.vue";
import router from "@/router/router";
import store from "@/store/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#edut");
