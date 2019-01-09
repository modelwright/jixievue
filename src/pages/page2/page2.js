import '@a/Styles/style.less'
import 'swiper/dist/css/swiper.css'
import Vue from "vue";
import App from "./page2.vue";
import router from "@/router/mod2router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
