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
            v-for="(recipe, index) in recipesFiltered"
            :key="index"
          >
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    {{ recipe.tabs }}
                    <span
                      ><v-icon
                        @click="deleteButton(recipe)"
                        color="red"
                        class="mb-1 mr-1"
                        size="22"
                      >
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
import header from "../../components/header.vue";
import AddRecipe from "../../components/AddRecipe.vue";

export default {
  components: {
    Header: header,
    AddRecipe: AddRecipe,
  },

  data() {
    return {};
  },
  methods: {
    deleteButton: function (target) {
      this.$store.commit("DELETE_RECIPE", target);
    },
  },

  computed: {
    recipesFiltered: function () {
      return this.$store.getters.filteredRecipes("Starter");
    },
  },
};
</script>

<style lang="scss"></style>
