<template>
  <v-container class="my-16">
    <v-layout row>
      <v-flex
        class="ma-1"
        xs16
        md2
        v-for="(recipe, index) in testt"
        :key="index"
      >
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ recipe.fields.tab }}
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
                {{ recipe.fields.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                recipe.fields.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn :to="`/recipe/${recipe.fields.title}`" text color="red">
              Show recipe
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <router-view />
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from "axios";
export default {
  mounted() {
    this.getRecipes(this.$route.name);
  },
  updated() {
    this.getRecipes(this.$route.name);
  },
  methods: {
    deleteButton: function (target) {
      axios
        .delete(
          `https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes/${target.id}`,
          {
            headers: {
              Authorization: "Bearer keynWocdalGuKcaAt",
            },
          }
        )
        .then((response) => console.log(response));
      console.log(target.id);
    },
    ...mapActions("recipes", ["getRecipes"]),
    ...mapMutations("recipes", ["DELETE_RECIPE"]),
  },
  computed: {
    test() {
      return this.testt();
    },
    ...mapGetters("recipes", ["testt"]),
    /* recipesFiltered: function () {
      return this.$store.getters.filteredRecipes(this.$route.name);
    }, */
  },
};
</script>

<style></style>
