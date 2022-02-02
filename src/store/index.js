import Vue from "vue";
import Vuex from "vuex";
import recipes from "./modules/recipes";
import ingredients from "./modules/ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    recipes,
    ingredients,
  },
  state: {
    tabs: ["Starters", "Mains", "Deserts", "Soups"],
  },
});
