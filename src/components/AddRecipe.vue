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
          @click="updateData"
          color="green"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-plus </v-icon>
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
              :items="$v.ingredientSelect.options.$model"
              v-model="$v.ingredientSelect.selected.$model"
              dense
            ></v-select>
            <p class="text-danger" v-if="submitStatus === 'ERROR'">
              {{ statusError }}
            </p>
            <v-select
              label="Quantity"
              :items="$v.quantitySelect.options.$model"
              v-model="$v.quantitySelect.selected.$model"
              dense
            ></v-select>
            <v-btn @click="addIngredient" depressed color="success" small>
              Add ingredient
            </v-btn>
          </v-col>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">
            {{ statusError }}
          </p>
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

export default {
  mounted() {
    if (this.$store.state.recipes.length < 1) this.dialog = true;
    this.getIngredients();
    this.getQuantity();
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
      ingredientSelect: {
        selected: null,
        options: [{ value: "null", text: "null" }],
      },
      quantitySelect: {
        selected: null,
        options: [{ value: "null", text: "null" }],
      },

      statusError: "Please fill the form correctly.",
      submitStatus: null,
      dialog: false,
    };
  },

  methods: {
    addNewRecipe() {
      this.$v.newRecipe.$touch();
      const id = Math.floor(Math.random() * 100000);
      this.newRecipe.id = id;
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        let recipes = {
          fields: {
            title: this.newRecipe.title,
            description: this.newRecipe.description,
            Ingredients: this.newRecipe.ingredients.map(
              (ingredient) => ingredient.id
            ),
            quantities: this.newRecipe.quantity.map((quantity) => quantity.id),
            method: this.newRecipe.method,
            tab: this.newRecipe.tabs,
          },
        };
        this.postRecipes(recipes);
        this.clearDialog();
      }
    },

    addIngredient() {
      if (this.quantitySelect.selected === null) {
        this.quantitySelect.selected === alert("Choose quantity");
      } else {
        this.newRecipe.ingredients.push(this.ingredientSelect.selected);
        this.newRecipe.quantity.push(this.quantitySelect.selected);
      }
    },
    updateData() {
      this.ingredientSelect.options = this.computedIngredients;
      this.quantitySelect.options = this.computedQuantity;
    },
    clearDialog() {
      this.newRecipe.title = "";
      this.newRecipe.description = "";
      this.newRecipe.tabs = null;
      this.newRecipe.method = "";
      this.ingredientSelect.selected = null;
      this.newRecipe.ingredients = [];
      this.newRecipe.quantity = [];
      this.quantitySelect.selected = null;
      this.submitStatus = null;
      this.dialog = false;
    },

    ...mapGetters("ingredients", ["ingredientsFiltered", "quantityFiltered"]),
    ...mapActions("ingredients", ["getIngredients", "getQuantity"]),
    ...mapActions("recipes", ["postRecipes"]),
  },
  computed: {
    computedIngredients() {
      return this.ingredientsFiltered();
    },
    computedQuantity() {
      return this.quantityFiltered();
    },
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
    ingredientSelect: {
      selected: { required },
      options: { required },
    },
    quantitySelect: {
      selected: { required },
      options: { required },
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
