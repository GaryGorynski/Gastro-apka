import { fetchRecipes } from "@/services/recipeService";
import axios from "axios";
export default {
  namespaced: true,
  state: {
    recipes: [],
  },
  getters: {
    /* filteredRecipes: (state) => (tab) => {
      return state.recipes.filter((recipe) => recipe.tabs === tab);
    }, */
    recipeRouted: (state) => (title) => {
      return state.recipes.find((recipe) => recipe.fields.title === title);
    },
    filteredRecipes: (state) => {
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
    DELETE_RECIPE(recipe) {
      axios
        .delete(`https://api.airtable.com/v0/appcWXfVQzYfiEUpm/"${recipe}"`, {
          headers: {
            Authorization: "Bearer keynWocdalGuKcaAt",
          },
        })
        .then((response) => console.log(response));
    },
    UPDATE_RECIPE(state, recipeid) {
      let filtered = state.recipes.filter(
        (staterecipe) => staterecipe.id !== recipeid
      );
      state.recipes = filtered;
    },
  },
};
