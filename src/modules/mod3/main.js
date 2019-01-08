import '@a/Styles/style.less'

import Vue from "vue";
import App from "@/pages/HeHomeApp.vue";
import router from "@/router/mod3router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#hehome");
