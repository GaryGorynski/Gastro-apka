<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-tabs align-with-title>
        <v-tab to="/Starters">Recipes</v-tab>
        <v-spacer></v-spacer>
      </v-tabs>

      <v-btn depressed> Log in </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="my-16">
        <h1 class="test ml-3">{{ recipe.fields.title }}</h1>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" class="mt-16">
            <v-sheet style="display: flex">
              <v-card width="200px" flat>
                <v-list-item>
                  <v-list-item-title class="text-h5 mb-1">
                    Ingredients
                  </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="ingredients in recipe.fields.ingredientName"
                  :key="ingredients.id"
                >
                  <v-list-item-content>
                    {{ ingredients }}
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-card class="mx-auto" max-width="50%" flat>
                <v-list-item>
                  <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="quantity in recipe.fields.quantities"
                  :key="quantity.id"
                >
                  <v-list-item-content> {{ quantity }} g </v-list-item-content>
                </v-list-item>
              </v-card></v-sheet
            >
          </v-col>

          <v-col>
            <v-sheet min-height="50vh" class="mr-16">
              <v-card class="mx-auto ml-0" max-width="1000" height="400" flat>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 mt-15">
                      <h1 style="font-weight: 300; font-size: 34px">Method</h1>
                      <v-divider></v-divider>
                    </v-list-item-title>
                    {{ recipe.fields.method }}
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn @click="multiply(1)" depressed color="primary">
                    x1
                  </v-btn>
                  <v-btn @click="multiply(2)" depressed color="primary">
                    x2
                  </v-btn>
                  <v-btn @click="multiply(5)" depressed color="primary">
                    x5
                  </v-btn>
                  <v-btn @click="multiply(10)" depressed color="primary">
                    x10
                  </v-btn>
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
import { mapGetters } from "vuex";
export default {
  created() {
    this.recipe = this.recipeRouted(this.$route.params.title);
    console.log(this.recipe);
  },
  data() {
    return {
      recipe: "",
    };
  },
  methods: {
    multiply: function (multiply) {
      this.recipe.fields.quantities.map((number) => number * multiply);
    },
  },
  computed: {
    ...mapGetters("recipes", ["recipeRouted"]),
  },
};
</script>

<style lang="scss">
.test {
  margin-left: 40px;
  font-weight: 400;
}
</style>
