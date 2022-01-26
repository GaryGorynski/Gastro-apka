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
import recipeCard from "../../components/recipe/recipeCard.vue";
import AddRecipe from "../../components/recipe/AddRecipe.vue";
export default {
  components: {
    Header: header,
    RecipeCard: recipeCard,
    AddRecipe: AddRecipe,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss"></style>
