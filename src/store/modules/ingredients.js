import { fetchIngredients } from "../../services/ingredientsService";
import { fetchQuantity } from "../../services/quantitiesService";
export default {
  namespaced: true,
  state: {
    ingredients: [],
    quantity: [],
  },
  getters: {
    ingredientsFiltered: (state) => {
      return state.ingredients.map((ingredient) => ({
        value: {
          id: ingredient.id,
          name: ingredient.fields.name,
        },
        text: ingredient.fields.name,
      }));
    },
    quantityFiltered: (state) => {
      return state.quantity.map((quantity) => ({
        value: {
          id: quantity.id,
          name: quantity.fields.quantity,
        },
        text: quantity.fields.quantity,
      }));
    },
  },
  actions: {
    getIngredients({ commit }) {
      fetchIngredients().then((response) => {
        commit(
          "SET_INGREDIENTS",
          response.data.records.map((record) => record)
        );
      });
    },
    getQuantity({ commit }) {
      fetchQuantity().then((response) => {
        commit(
          "SET_QUANTITY",
          response.data.records.map((record) => record)
        );
      });
    },
  },
  mutations: {
    SET_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients;
    },
    SET_QUANTITY(state, quantity) {
      state.quantity = quantity;
    },
  },
};
