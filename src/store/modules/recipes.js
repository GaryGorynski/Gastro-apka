import { fetchRecipes } from "../../services/recipeService";

export default {
  state: {
    recipes: [],
  },
  getters: {
    filteredRecipes: (state) => (tab) => {
      return state.recipes.filter((recipe) => recipe.tabs === tab);
    },
    recipeRouted: (state) => (title) => {
      return state.recipes.find((recipe) => recipe.title === title);
    },
    testt: (state) => {
      return state.recipes.map((recipe) => recipe);
    },
  },
  actions: {
    getRecipes({ commit }, data) {
      fetchRecipes(data).then((response) => {
        commit(
          "SET_RECIPES",
          response.data.records.filter((record) => record)
        );
      });
    },
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
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
};
