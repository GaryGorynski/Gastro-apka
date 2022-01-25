import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starterRecipes: [],
    MainsRecipes: [],
    DesertsRecipes: [],
    SoupsRecipes: [],
    ingredients: ["Mleko", "Maslo"],
    quantity: ["1g", "10g", "20g", "50g", "100g"],
  },
  mutations: {
    ADD_STARTER(state, recipe) {
      state.starterRecipes.push(recipe);
    },
    ADD_MAIN(state, recipe) {
      state.MainsRecipes.push(recipe);
    },
    ADD_DESERT(state, recipe) {
      state.DesertRecipes.push(recipe);
    },
    ADD_SOUP(state, recipe) {
      state.SoupsRecipes.push(recipe);
    },
  },
  actions: {},
  modules: {},
});
