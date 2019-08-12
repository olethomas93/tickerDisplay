import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "@/assets/css/main.css";
import VueDraggable from "vue-draggable";
import VueYoutube from "vue-youtube";
import { store } from "./vuex/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutubeSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faDumpster,
  faDollarSign,
  faCalendarAlt,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faDumpster,
  faDollarSign,
  faClock,
  faCalendarAlt,
  faUpload,
  faYoutubeSquare,
  faTwitter
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueDraggable);
Vue.use(VueYoutube);

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#5b3cc4",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)"
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
