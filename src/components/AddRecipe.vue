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
          <v-text-field label="Title" style="height: 50px"></v-text-field>
        </v-col>
        <v-col class="ml-10" cols="12" md="6">
          <v-textarea label="Description" value=""></v-textarea>
        </v-col>
        <v-col class="d-flex ml-10" cols="12" sm="6">
          <v-select label="Ingredients" dense></v-select>
          <v-select label="Quantity" dense></v-select>
        </v-col>
        <v-col class="ml-10 mb-5" cols="12" md="6">
          <v-textarea
            name="input-7-1"
            label="Method"
            style="height: 135px"
            value=""
          ></v-textarea>
        </v-col>
        <v-card-actions>
          <v-btn color="success"> Add recipe </v-btn>
          <v-btn color="error"> Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
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

<style></style>
