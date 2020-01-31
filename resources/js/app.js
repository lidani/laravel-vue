import Vue from "vue";
import vuetify from "./plugins/vuetify";

import App from "./App.vue";

import "./bootstrap";

const app = new Vue({
  el: "#app",
  vuetify,
  render: h => h(App)
});

window.Vue = Vue;
