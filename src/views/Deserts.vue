<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <v-container class="my-16">
        <v-layout row>
          <v-flex
            class="ma-1"
            xs16
            md2
            v-for="recipe in recipesFiltered"
            :key="recipe.id"
          >
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">{{ recipe.tabs }}</div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{ recipe.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    recipe.description
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn :to="`/recipe/${recipe.title}`" text color="red">
                  Show recipe
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <router-view />
        </v-layout>
      </v-container>
      <AddRecipe />
    </v-main>
  </v-app>
</template>

<script>
import header from "../components/header.vue";
import AddRecipe from "../components/AddRecipe.vue";
export default {
  components: {
    Header: header,
    AddRecipe: AddRecipe,
  },
  data: () => ({}),
  computed: {
    recipesFiltered: function () {
      return this.$store.getters.filteredRecipes("Desert");
    },
  },
};
</script>

<style lang="scss"></style>
