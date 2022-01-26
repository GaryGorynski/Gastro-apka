import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    tabs: ["Starter", "Main", "Desert", "Soup"],
    ingredients: ["Mleko", "Maslo"],
    quantity: ["1", "10", "20", "50", "100"],
  },
  getters: {
    // ...
    test: (state) => {
      return state.recipes.filter((recipe) => recipe.tabs === recipe.tabs);
    },
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
  actions: {},
  modules: {},
});
