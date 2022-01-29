import Vue from "vue";
import VueRouter from "vue-router";
import Deserts from "../views/tabs/Deserts.vue";
import Starters from "../views/tabs/Starters.vue";
import Mains from "../views/tabs/Mains.vue";
import Soups from "../views/tabs/Soups.vue";
import Login from "../views/tabs/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/starters",
    name: "Starters",
    component: Starters,
  },
  {
    path: "/mains",
    name: "Mains",
    component: Mains,
  },
  {
    path: "/soups",
    name: "Soups",
    component: Soups,
  },
  {
    path: "/deserts",
    name: "Deserts",
    component: Deserts,
  },
  {
    path: "/recipe/:title",
    name: "Recipe",
    component: () => import("../views/Recipe.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
