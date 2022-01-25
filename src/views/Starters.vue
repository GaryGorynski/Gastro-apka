<template>
  <v-app id="inspire">
    <Header />
    <v-main
      ><div class="text-center">
        <v-dialog v-model="dialog" width="550">
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

          <v-card max-width="600">
            <v-col class="ml-10" cols="12" sm="6">
              <vcard-title class="text-h5">Add new recipe </vcard-title>
              <v-text-field label="Title"></v-text-field>
            </v-col>
            <v-col class="ml-10" cols="12" md="6">
              <v-textarea label="Description" value=""></v-textarea>
            </v-col>
            <v-col class="d-flex ml-10" cols="12" sm="6">
              <v-select :items="items" label="Ingredients" dense></v-select>
              <v-select :items="items" label="Quantity" dense></v-select>
            </v-col>
            <v-col class="ml-10" cols="12" md="6">
              <v-textarea name="input-7-1" label="Method" value=""></v-textarea>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success"> Add recipe </v-btn>
              <v-btn color="error"> Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <RecipeCard />
    </v-main>
  </v-app>
</template>

<script>
import header from "../components/header.vue";
import recipeCard from "../components/recipeCard.vue";

export default {
  components: {
    Header: header,
    RecipeCard: recipeCard,
  },
  methods: {
    togglePopup: function () {
      this.popupOpen = !this.popupOpen;
    },
  },
  data: () => ({
    popupOpen: false,
  }),
};
</script>

<style lang="scss"></style>
