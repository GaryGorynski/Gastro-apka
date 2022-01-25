import Vue from "vue";
import VueRouter from "vue-router";
import Deserts from "../views/Deserts.vue";
import Starters from "../views/Starters.vue";
import Mains from "../views/Mains.vue";
import Soups from "../views/Soups.vue";
import Recipe from "../views/Recipe.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
