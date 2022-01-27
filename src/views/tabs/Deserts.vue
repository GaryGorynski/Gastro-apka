<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <RecipeCard />
      <AddRecipe />
    </v-main>
  </v-app>
</template>

<script>
import header from "../../components/header.vue";
import AddRecipe from "../../components/AddRecipe.vue";
import RecipeCard from "./RecipeCard.vue";
export default {
  components: {
    Header: header,
    AddRecipe: AddRecipe,
    RecipeCard: RecipeCard,
  },
  methods: {
    deleteButton: function (target) {
      this.$store.commit("DELETE_RECIPE", target);
    },
  },
  data: () => ({}),
  computed: {
    recipesFiltered: function () {
      return this.$store.getters.filteredRecipes(this.$route.name);
    },
  },
};
</script>

<style lang="scss"></style>
