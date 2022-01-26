<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="my-16 ml-2">
        <h1 class="test">{{ recipe.title }}</h1>
        <v-divider class="ml-10"></v-divider>
        <v-row>
          <v-col cols="4" class="mt-16 ml-6">
            <v-sheet style="display: flex">
              <v-card class="mx-auto" max-width="60%" flat>
                <v-list-item>
                  <v-list-item-title class="text-h5 mb-1">
                    Ingredients
                  </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="ingredients in recipe.ingredients"
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

                <v-list-item v-for="quantity in quantity" :key="quantity.id">
                  <v-list-item-content>
                    {{ quantity }}
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
                  <v-btn @click="multiplyOne" depressed color="primary">
                    x1
                  </v-btn>
                  <v-btn @click="multiplyTwo" depressed color="primary">
                    x2
                  </v-btn>
                  <v-btn @click="multiplyFive" depressed color="primary">
                    x5
                  </v-btn>
                  <v-btn @click="multiplyTen" depressed color="primary">
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
export default {
  data() {
    return {
      quantity: "",
    };
  },
  methods: {
    multiplyOne: function () {
      let quantity = this.recipe.quantity.map((number) => number * 1);
      this.quantity = quantity;
      console.log(this.quantity);
    },
    multiplyTwo: function () {
      let quantity = this.recipe.quantity.map((number) => number * 2);
      this.quantity = quantity;
      console.log(this.quantity);
    },
    multiplyFive: function () {
      let quantity = this.recipe.quantity.map((number) => number * 5);
      this.quantity = quantity;
      console.log(this.quantity);
    },
    multiplyTen: function () {
      let quantity = this.recipe.quantity.map((number) => number * 10);
      this.quantity = quantity;
      console.log(this.quantity);
    },
  },
  computed: {
    recipe: function () {
      return this.$store.state.recipes.find(
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
