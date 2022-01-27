import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    tabs: ["Starters", "Mains", "Deserts", "Soups"],
    ingredients: ["Mleko", "Maslo", "Olej", "Pomidory"],
    quantity: ["1", "10", "20", "50", "100", "500", "1000", "2000", "5000"],
  },
  getters: {
    // ...
    filteredRecipes: (state) => (tab) => {
      return state.recipes.filter((recipe) => recipe.tabs === tab);
    },
    recipeRouted: (state) => (title) => {
      return state.recipes.find((recipe) => recipe.title === title);
    },
  },

  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
    DELETE_RECIPE(state, recipe) {
      let filtered = state.recipes.filter(
        (staterecipe) => staterecipe.id !== recipe.id
      );
      state.recipes = filtered;
    },
  },
  actions: {},
  modules: {},
});
