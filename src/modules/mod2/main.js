import Vue from "vue";
import App from "@/pages/WikipediaApp.vue";
import router from "@/router/mod2router";
import store from "@/store/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#wikipedia");
