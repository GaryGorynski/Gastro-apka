<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <RecipeCard />
      <AddRecipe />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import AddRecipe from "@/components/AddRecipe.vue";
import RecipeCard from "./RecipeCard.vue";

export default {
  components: {
    Header,
    AddRecipe,
    RecipeCard,
  },

  data() {
    return {};
  },
  methods: {
    deleteButton: function (target) {
      this.$store.commit("DELETE_RECIPE", target);
    },
  },
};
</script>

<style lang="scss"></style>
