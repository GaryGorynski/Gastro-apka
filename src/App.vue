<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <RecipeCard />

      <v-btn fixed right bottom class="mx-2" fab dark color="green">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>
<script>
import header from "./components/header.vue";
import recipeCard from "./components/recipeCard.vue";
export default {
  components: {
    Header: header,
    RecipeCard: recipeCard,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
