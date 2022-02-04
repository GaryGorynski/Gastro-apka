import { fetchRecipesService } from "@/services/recipeService";
import { postRecipesService } from "@/services/postRecipeService";
import { deleteRecipeService } from "@/services/deleteRecipeService";

export default {
  namespaced: true,
  state: {
    recipes: [],
  },
  getters: {
    recipeRouted: (state) => (title) => {
      return state.recipes.find((recipe) => recipe.fields.title === title);
    },
    filteredRecipes: (state) => {
      return state.recipes.map((recipe) => recipe);
    },
  },
  actions: {
    getRecipes({ commit }, data) {
      fetchRecipesService(data).then((response) => {
        commit(
          "SET_RECIPES",
          response.data.records.filter((record) => record)
        );
      });
    },
    postRecipes({ commit }, data) {
      postRecipesService(data).then((response) => {
        commit("POST_RECIPE_UPDATE", response.data);
      });
    },
    deleteRecipe({ commit }, data) {
      deleteRecipeService(data)
        .then((response) => {
          commit("AFTER_DELETE_UPDATE", response.data.id);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },

    AFTER_DELETE_UPDATE(state, recipeid) {
      let filtered = state.recipes.filter(
        (staterecipe) => staterecipe.id !== recipeid
      );
      state.recipes = filtered;
    },
    POST_RECIPE_UPDATE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
};
