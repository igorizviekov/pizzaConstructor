<template>
  <v-app>
    <basket />
    <v-content class="container">
      <br />
      <router-link class="link" to="/login" active-class="active">Login</router-link>
      <router-link class="link" to="/register" active-class="active">Register</router-link>
      <router-link class="link" to="/main" active-class="active">Main</router-link>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Basket from "./components/basket/basket.vue";
export default {
  name: "App",

  components: {
    Basket
  },

  data: () => ({
    //
  })
};
</script>

<style>
.link {
  background-color: lightblue;
  padding: 2%;
  margin: 1%;
}
.active {
  background-color: darkblue;
}
</style>
