<template>
  <div class="container">
    <h1>Please Login</h1>
    <v-form class="form">
      <v-text-field
        label="Email"
        class="input"
        type="email"
        v-model="user.email"
        hint="email@example.com"
      />
      <v-text-field
        v-model="user.password"
        class="input"
        type="password"
        label="Password"
        hint="At least 8 characters"
      />
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "PZLogin",

  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$store.state.user.push(this.user);
      this.$router.push("/main");
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}

.form {
  margin: 5%;
  padding: 5% 2%;
  border: 1px solid black;
}

.input {
  padding: 2%;
  width: 80%;
  margin: auto;
}
</style>
