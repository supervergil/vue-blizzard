import Vue from "vue";
import Router from "vue-router";
import Default from "./layouts/default";
import Home from "./views/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Default,
      children: [
        {
          path: "",
          redirect: "home"
        },
        {
          path: "home",
          component: Home
        }
      ]
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
