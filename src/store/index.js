import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    mainsRecipes: [],
    ingredients: ["Mleko", "Maslo"],
    quantity: ["1", "10", "20", "50", "100"],
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
  actions: {},
  modules: {},
});
