import Vue from "vue";
import router from "./router";

new Vue({
  router,
  render(h) {
    return (
      <div id="container">
        <router-view />
      </div>
    );
  }
}).$mount("#app");
