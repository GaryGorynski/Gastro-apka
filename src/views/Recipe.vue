<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="my-16 ml-2">
        <h1 class="test">{{ recipe.title }}</h1>
        <v-divider class="ml-10"></v-divider>
        <v-row>
          <v-col cols="4" class="mt-16 ml-6">
            <v-sheet>
              <v-card
                class="mx-auto"
                max-width="auto"
                flat
                v-for="ingredient in recipe.ingredients.ingredients"
                :key="ingredient"
              >
                <v-list-item>
                  <v-list-item-title class="text-h5 mb-1">
                    Ingredients
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      recipe.ingredient
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card></v-sheet
            >
          </v-col>

          <v-col>
            <v-sheet min-height="50vh">
              <v-card class="mx-auto" max-width="1000" height="400" flat>
                <v-list-item three-line>
                  <v-list-item-content class="ml-10">
                    <v-list-item-title class="text-h5 my-15">
                      <h1 style="font-weight: 300; font-size: 34px">Method</h1>
                      <v-divider></v-divider>
                    </v-list-item-title>
                    {{ recipe.method }}
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions class="ml-11">
                  <v-btn depressed color="primary"> x1 </v-btn>
                  <v-btn depressed color="primary"> x2 </v-btn>
                  <v-btn depressed color="primary"> x5 </v-btn>
                  <v-btn depressed color="primary"> x10 </v-btn>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    recipe: function () {
      return this.$store.state.starterRecipes.find(
        (recipe) => recipe.title === this.$route.params.title
      );
    },
  },
};
</script>

<style lang="scss">
.test {
  margin-left: 40px;
  font-weight: 400;
}
</style>
