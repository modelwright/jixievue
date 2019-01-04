import Vue from "vue";
import App from "@/pages/App2.vue";
import router from "@/router/router";
import store from "@/store/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
