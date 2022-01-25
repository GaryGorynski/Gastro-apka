<template>
  <v-container class="my-16">
    <v-layout row>
      <v-flex class="ma-1" xs16 md2 v-for="recipe in recipes" :key="recipe.id">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Starters</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ recipe.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                recipe.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn to="/recipe" text color="red"> Show recipe </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <router-view />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    recipes: {
      recipeOne: { title: "Recipe One", description: "Description One" },
      recipeTwo: {
        title: "Recipe Two",
        description: "Description Two",
      },
      recipeThree: { title: "Recipe Three", description: "Description Three" },
      recipeFour: { title: "Recipe four", description: "Description four" },
      recipeFive: { title: "Recipe five", description: "Description five" },
      recipeSix: { title: "Recipe six", description: "Description six" },
    },
  }),
};
</script>

<style></style>
