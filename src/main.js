import Vue from "vue";
import router from './router'
import store from './store'
import App from "./App.vue";
import Vuetify from "vuetify";
import fr from "vuetify/es5/locale/fr";
import eudoFront from "eudo-front";
import "vuetify/dist/vuetify.min.css";

Vue.use(eudoFront);

const opts = {
  icons: {
    iconfont: "mdi"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#bb1515",
        secondary: "#757575",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { fr },
    current: "fr"
  }
};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts),
  router, store,
  render: h => h(App)
}).$mount("#app");


Vue.config.productionTip = false

