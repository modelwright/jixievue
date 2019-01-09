
import '@a/Styles/style.less'

import Vue from "vue";
import App from "./page1.vue";
import router from "@/router/mod1router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
