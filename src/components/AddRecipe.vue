<template>
  <div class="text-center">
    <v-dialog width="650" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
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

      <v-card max-width="650">
        <v-col class="ml-10" cols="12" sm="6">
          <v-card-title class="text-h5">Add new recipe </v-card-title>
          <v-text-field
            label="Title"
            v-model="$v.newRecipe.title.$model"
            style="height: 50px"
          ></v-text-field>
          <p class="text-success" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
        </v-col>
        <v-col class="ml-10" cols="12" md="6">
          <v-textarea
            label="Description"
            v-model="$v.newRecipe.description.$model"
          ></v-textarea>
          <p class="text-success" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
        </v-col>
        <v-col class="d-flex ml-9" cols="12" sm="6">
          <v-select
            label="Ingredients"
            :items="$store.state.ingredients"
            v-model="ingredient"
            dense
          ></v-select>

          <v-select
            label="Quantity"
            :items="$store.state.quantity"
            v-model="quantity"
            dense
          ></v-select>
          <v-btn @click="addIngredient" fab dark small color="success">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-col>
        <v-col class="ml-10 mb-5" cols="12" md="6">
          <v-select
            label="Choose your tab"
            :items="$store.state.tabs"
            v-model="newRecipe.tabs"
            dense
          ></v-select>
          <p class="text-success" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
          <v-textarea
            v-model="$v.newRecipe.method.$model"
            @keyup.enter="addNewRecipe"
            name="input-7-1"
            label="Method"
            style="height: 130px"
            class="mb-10"
            no-resize
          >
          </v-textarea>
          <p class="text-success" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
        </v-col>

        <v-card-actions>
          <v-btn color="success" @click="addNewRecipe"> Add recipe </v-btn>
          <v-btn color="error" @click="dialog = false"> Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newRecipe: {
        title: "",
        description: "",
        tabs: "",
        ingredients: [],
        quantity: [],
        method: "",
      },
      ingredient: "",
      quantity: "",
      submitStatus: null,
      dialog: false,
    };
  },
  validations: {
    newRecipe: {
      title: {
        required,
      },
      description: { required },

      method: { required },
    },
  },
  methods: {
    addNewRecipe: function () {
      this.$v.newRecipe.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$store.commit("ADD_RECIPE", { ...this.newRecipe });
        this.newRecipe.title = "";
        this.newRecipe.description = "";
        this.newRecipe.tabs = null;
        this.newRecipe.method = "";
        this.submitStatus = "OK";
      }
    },

    addIngredient: function () {
      // let ingredients = this.ingredient + " " + this.quantity;
      this.newRecipe.ingredients.push(this.ingredient);
      this.newRecipe.quantity.push(this.quantity);
    },
  },
};
</script>

<style>
.text-success {
  color: green;
  font-weight: 300;
  font-size: 14px;
}

.text-danger {
  color: red;
  font-weight: 300;
  font-size: 14px;
}
</style>
