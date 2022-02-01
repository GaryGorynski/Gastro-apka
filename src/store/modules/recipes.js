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
  },
  actions: {},
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
};
