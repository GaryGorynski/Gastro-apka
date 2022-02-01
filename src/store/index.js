import Vue from "vue";
import Vuex from "vuex";
import recipes from "./modules/recipes";
import ingredients from "./modules/ingredients";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    recipes,
    ingredients,
  },
  state: {
    quantity: ["1", "10", "20", "50", "100", "500", "1000", "2000", "5000"],
    tabs: ["Starters", "Mains", "Deserts", "Soups"],
  },
});
