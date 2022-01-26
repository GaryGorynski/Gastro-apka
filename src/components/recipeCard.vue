<template>
  <v-container class="my-16">
    <v-layout row>
      <v-flex
        class="ma-1"
        xs16
        md2
        v-for="recipe in $store.state.recipes"
        :key="recipe.title"
      >
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Starters</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ recipe.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                recipe.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn :to="`/recipe/${recipe.title}`" text color="red">
              Show recipe
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <router-view />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
