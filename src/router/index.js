import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DetailsPage from '../views/layout/Details/DetailsPage.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: DetailsPage,
  },
  
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
