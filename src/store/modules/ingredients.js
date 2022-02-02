import { fetchIngredients } from "../../services/ingredientsService";
export default {
  namespaced: true,
  state: {
    ingredients: [],
  },
  getters: {
    ingredientsFiltered: (state) => {
      return state.ingredients.map((ingredient) => ({
        value: ingredient.id,
        text: ingredient.name,
      }));
    },
  },
  actions: {
    getIngredients({ commit }) {
      fetchIngredients().then((response) => {
        commit(
          "SET_INGREDIENTS",
          response.data.records.map((record) => record.fields)
        );
      });
    },
  },
  mutations: {
    SET_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients;
    },
  },
};
