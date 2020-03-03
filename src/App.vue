<template>
  <v-app>
    <v-content class="container">
      <h1>Hello</h1>
      <br />
      <router-link class="link" to="/login" active-class="active"
        >Login</router-link
      >
      <router-link class="link" to="/register" active-class="active"
        >Register</router-link
      >
      <router-link class="link" to="/1" active-class="active"
        >Random</router-link
      >
      <router-link class="link" to="/2" active-class="active"
        >Another Random</router-link
      >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    //
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
