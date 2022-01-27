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
                  <div class="text-overline mb-4">
                    {{ recipe.tabs }}
                    <span
                      ><v-icon color="red" class="mb-2 ml-11" size="24">
                        mdi-delete
                      </v-icon>
                    </span>
                  </div>

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
  methods: {
    test: function () {
      console.log(this.recipesFiltered);
    },
  },
  computed: {
    recipesFiltered: function () {
      return this.$store.getters.filteredRecipes("Main");
    },
  },
};
</script>

<style lang="scss"></style>
