<template>
  <div>
    <v-app-bar app height="20">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider></v-tabs-slider>

          <v-tab to="/starters">Starters</v-tab>
          <v-tab to="/mains">Mains</v-tab>
          <v-tab to="/soups">Soups</v-tab>
          <v-tab to="/deserts">Deserts</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <v-btn to="/" depressed> Login </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item to="/starters"> Starters </v-list-item>
        <v-list-item to="/mains"> Mains</v-list-item>
        <v-list-item to="/soups"> Soups</v-list-item>
        <v-list-item to="/deserts"> Deserts</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: null,
    };
  },
};
</script>

<style></style>
