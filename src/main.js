import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faClock);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
