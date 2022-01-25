<template>
  <div class="text-center">
    <v-dialog width="550">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="togglePopup"
          fixed
          right
          bottom
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-card max-width="550">
        <v-col class="ml-10" cols="12" sm="6">
          <v-card-title class="text-h5">Add new recipe </v-card-title>
          <v-text-field
            label="Title"
            v-model="newRecipe.title"
            style="height: 50px"
          ></v-text-field>
        </v-col>
        <v-col class="ml-10" cols="12" md="6">
          <v-textarea
            label="Description"
            v-model="newRecipe.description"
          ></v-textarea>
        </v-col>
        <v-col class="d-flex ml-10" cols="12" sm="6">
          <v-select
            label="Ingredients"
            :items="$store.state.ingredients"
            v-model="ingredient"
            dense
            class="mr-5"
          ></v-select>

          <v-select
            label="Quantity"
            :items="$store.state.quantity"
            v-model="quantity"
            dense
          ></v-select>
          <v-btn
            @click="addIngredient"
            class="mx-2 ml-1"
            fab
            dark
            small
            color="success"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-col>
        <v-col class="ml-10 mb-5" cols="12" md="6">
          <v-textarea
            v-model="newRecipe.method"
            name="input-7-1"
            label="Method"
            style="height: 135px"
            value=""
          ></v-textarea>
        </v-col>
        <v-card-actions>
          <v-btn color="success" @click="addNewRecipe"> Add recipe </v-btn>
          <v-btn color="error"> Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    popupOpen: false,
    newRecipe: {
      title: "",
      description: "",
      ingredients: [],
      quantity: [],
    },
    ingredient: "",
    quantity: "",
  }),
  methods: {
    togglePopup: function () {
      this.popupOpen = !this.popupOpen;
    },
    addNewRecipe: function () {
      this.$store.commit("ADD_STARTER", this.newRecipe);
      console.log(this.newRecipe);
    },

    addIngredient: function () {
      this.newRecipe.ingredients.push(this.ingredient),
        console.log(this.newRecipe.ingredients);
      this.newRecipe.quantity.push(this.quantity);
    },
  },
};
</script>

<style></style>
