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
          <v-icon @click="testt" dark> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-card max-width="650">
        <v-sheet>
          <v-col md="12" sm="6">
            <v-card-title class="text-h5">Add new recipe </v-card-title>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.newRecipe.title.$error }"
            >
              <v-text-field
                label="Title"
                v-model="$v.newRecipe.title.$model"
                style="height: 50px"
              ></v-text-field>
            </div>

            <p class="text-danger" v-if="submitStatus === 'ERROR'">
              {{ statusError }}
            </p>
          </v-col>
          <v-col md="12" sm="6">
            <v-text-field
              label="Description"
              v-model="$v.newRecipe.description.$model"
            ></v-text-field>
            <p class="text-danger" v-if="submitStatus === 'ERROR'">
              {{ statusError }}
            </p>
          </v-col>
          <v-col md="12" sm="6">
            <v-select
              label="Ingredients"
              :items="options"
              v-model="selected"
              dense
            ></v-select>

            <v-select
              label="Quantity"
              :items="$store.state.quantity"
              v-model="quantity"
              dense
            ></v-select>
            <v-btn @click="addIngredient" depressed color="success" small>
              Add ingredient
            </v-btn>
          </v-col>
          <v-col md="6" sm="6">
            <v-select
              label="Choose your tab"
              :items="$store.state.tabs"
              v-model="newRecipe.tabs"
              dense
            ></v-select>
            <p class="text-danger" v-if="submitStatus === 'ERROR'">
              {{ statusError }}
            </p>
            <v-textarea
              v-model="$v.newRecipe.method.$model"
              name="input-7-1"
              label="Method"
              style="height: 150px"
              md="6"
              sm="6"
              no-resize
            >
            </v-textarea>
            <p class="text-danger" v-if="submitStatus === 'ERROR'">
              {{ statusError }}
            </p>
          </v-col>

          <v-card-actions>
            <v-btn color="success" @click="addNewRecipe"> Add recipe </v-btn>
            <v-btn color="error" @click="dialog = false"> Close</v-btn>
          </v-card-actions>
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  mounted() {
    if (this.$store.state.recipes.length < 1) this.dialog = true;
    this.getIngredients();
  },
  data() {
    return {
      newRecipe: {
        title: "",
        description: "",
        tabs: "",
        ingredients: [],
        quantity: [],
        method: "",
        id: "",
      },
      selected: null,
      options: [{ value: "null", text: "null" }],
      ingredient: "",
      quantity: "",
      statusError: "Please fill the form correctly.",
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
      tabs: { required },
    },
  },
  methods: {
    addNewRecipe: function () {
      this.$v.newRecipe.$touch();
      const id = Math.floor(Math.random() * 100000);
      this.newRecipe.id = id;
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$store.commit("ADD_RECIPE", { ...this.newRecipe });

        axios
          .post(
            "https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes",
            {
              fields: {
                title: this.newRecipe.title,
                description: this.newRecipe.description,
                ingredients: this.newRecipe.ingredients.map(
                  (ingredient) => ingredient.id
                ),
                method: this.newRecipe.method,
              },
            },
            {
              headers: {
                Authorization: "Bearer keynWocdalGuKcaAt",
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
          });
        this.newRecipe.title = "";
        this.newRecipe.description = "";
        this.newRecipe.tabs = null;
        this.newRecipe.method = "";
        this.submitStatus = null;
        this.dialog = false;
      }
    },

    addIngredient: function () {
      this.newRecipe.ingredients.push(this.selected);
      this.newRecipe.quantity.push(this.quantity);
    },
    testt() {
      this.options = this.test;
      console.log(this.options);
    },

    ...mapGetters("ingredients", ["ingredientsFiltered"]),
    ...mapActions("ingredients", ["getIngredients"]),
  },
  computed: {
    test() {
      return this.ingredientsFiltered();
    },
  },
};
</script>

<style>
.text-danger {
  color: red;
  font-weight: 300;
  font-size: 14px;
}
</style>
